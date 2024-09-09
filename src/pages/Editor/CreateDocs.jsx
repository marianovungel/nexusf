import { useParams } from 'react-router-dom'
import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-pro-react";
import { api_base_url } from '../../Helper';
import { useUserStore } from '../../lib/userStore';

export default function CreateDocs() {
    let {docsId} = useParams()
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [error, setError] = useState("")
    const { currentUser } = useUserStore()
    // console.log(error)


    const updateDoc = async ()=>{
        fetch(api_base_url + "/uploadDoc", {
          mode:"cors",
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            userId: currentUser?.id,
            docId:docsId,
            content:content
          }),
        })
        .then((res)=> res.json())
          .then((data)=>{
              if(data.status === "success"){
                setError(data.message)
              }else{
                  setError("")
              }
          })
    }

    const getContent = async ()=>{
        fetch(api_base_url + "/getDoc", {
          mode:"cors",
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            userId: currentUser?.id,
            docId:docsId,
            content:content
          }),
        })
        .then((res)=> res.json())
          .then((data)=>{
              if(data.success === false){
                setError(data.message)
              }else{
                  setContent(data.doc.content)
              }
          })
    }

    useEffect(()=>{
      getContent();
    }, [currentUser?.id])

    
  return (
    <>
      <div className='px-[100px] mt-3 mx-auto w-3/5  lg:w-1/2 md:w-3/4 sm:w-full sm:px-0'>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1} // tabIndex of textarea 
          // onChange={(e)=>{
          //   setContent(e.target.value)
          //   updateDoc()
          // }}
          onChange={(e)=>{setContent(e); updateDoc()}}
        />
      </div>
    </>
  )
}
