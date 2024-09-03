import React, { useEffect, useRef, useState } from 'react'
import './ChatItem.css'
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";
// import { FaCamera } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa6";
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../../lib/firebase';
import { useChatStore } from '../../../lib/chatStore';
import { toast } from 'react-toastify';
import { useUserStore } from '../../../lib/userStore';
import upload from '../../../lib/upload'
const AvatarULR = "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"


export default function ChatItem() {
  const [chat, setChat] = useState()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const [img, setImg] = useState({
    file: null,
    url: "",
  })

  const handleImg = e =>{
    if(e.target.files[0]){
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const endRef = useRef(null)
  const { chatId, user, isReceiverBlocked, isCurrentUserBlocked } = useChatStore()
  const { currentUser } = useUserStore()

  useEffect(()=>{
    endRef.current?.scrollIntoView({ behavior: "smooth"})
  }, [])

  useEffect(()=>{
    const unSub = onSnapshot(
      doc(db, "chats", chatId),
      (res)=>{
        setChat(res.data())
      }
    )

    return ()=>{
      unSub()
    }
  }, [chatId])

  const handleEmoji = e =>{
    setText((prev)=> prev + e.emoji)
    setOpen(false)
  }
  const handleSend = async (e) =>{
    if(text === "") return

    let imgUrl = null;

    try {

      if(img.file){
        imgUrl = await upload(img.file)
      }
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        })
      })

      const userIDs = [currentUser.id, user.id]

      userIDs.forEach(async (id)=>{
        const userChatsRef = doc(db, "userchats", id)
        const userChatsSnapshot = await getDoc(userChatsRef)
  
        if(userChatsSnapshot.exists()){
          const userChatsData = userChatsSnapshot.data()
  
          const chatIndex = userChatsData.chats.findIndex((c)=> c.chatId === chatId)
  
          userChatsData.chats[chatIndex].lastMessage = text
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false
          userChatsData.chats[chatIndex].updateAt = Date.now()
  
          await updateDoc(userChatsRef, {
            chats: userChatsData.chats
          })
        }
      })

    } catch (error) {
      toast.error(error.message)
    }

    setImg({
      file:null,
      url: ""
    })

    setText("")
  }


  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src={user?.avatar ? user?.avatar : AvatarULR } alt="" />
          <div className="texts">
            <span>{user.username}</span>
            <p>Usuário de todas as redes sociais.</p>
          </div>
        </div>
        <div className="icons">
          <IoCall size={20} color='white' />
          <FaVideo size={20} color='white' />
          <FaInfoCircle size={20} color='white' />
        </div>
      </div>
      <div className="center scrollNone">
        {chat?.messages.map((message)=>(
          <div className={message.senderId === currentUser.id ? "message own" : "message"} key={message?.createdAt.seconds}>
            <div className="texts">
              {message.img && 
                <img src={message?.img} alt="" />
              }
              <p>
                {message?.text}
              </p>
              <span>1 min ago</span>
            </div>
          </div>
        ))}
        {img.url && <div className="message own">
          <div className="texts">
            <img src={img.url} alt="" />
          </div>
        </div>}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <IoMdImage size={20} color='white' className='img' />
          </label>
          <input type="file" id='file' style={{display: "none"}} onChange={handleImg} />
          {/* <FaCamera size={20} color='white' className='img' /> */}
          {/* <FaMicrophone size={20} color='white' className='img' /> */}
        </div>
        <input value={text} type="text" placeholder={(isReceiverBlocked || isCurrentUserBlocked) ? "Não podes enviar Mensagem": "mensagem..."} onChange={(e)=> setText(e.target.value)} disabled={isReceiverBlocked || isCurrentUserBlocked} />
        <div className="emoji">
          <img src="./image/emoje1.png" alt="" onClick={()=>setOpen((prev)=> !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton" onClick={handleSend} disabled={isReceiverBlocked || isCurrentUserBlocked}>Enviar</button>
      </div>
    </div>
  )
}
