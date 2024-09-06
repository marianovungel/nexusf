import React, { useState } from 'react'
import './Solicitation.css'
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { api_base_url } from '../../Helper';

export default function Solicitation({ data }) {
    const [datas, setDatas] = useState([])
    
    const RegectSolicitation = async ()=>{
        await fetch(api_base_url + "/reject", {
          mode:"cors",
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            notifyId: data?._id,
          }),
        })
        .then((res)=> res.json())
          .then((data)=>{
              setDatas(data.notification)
              console.log(data.notification)
              toast.success("Solicitação Rejeitada com sucesso!")
          })
        }
  return (
    <div id='rejectedContainer' className='w-full flex flex-row items-center justify-between bg-blend-lighten gap-3 py-3 hover:bg-cyan-50'>
        <div className='flex flex-row items-center justify-start gap-3 px-3'>
            <img className='w-20 h-20 rounded-full' src="./image/NEXUS.png" alt="" />
            <div className='flex flex-col items-start justify-center gap-1'>
                <b className='font-medium'>{data.usernotifyName}</b>
                <p>{data.text}</p>
            </div>
        </div>
        <div className='px-3 h-full flex flex-col items-end justify-center gap-3'>
            <BsThreeDots size={24} color='gray' />
            <div className='flex flex-row items-center justify-end gap-3'>
                <FaRegCircleXmark size={35} onClick={RegectSolicitation} />
                <FaRegCircleCheck size={35} className='text-sky-700' />
            </div>
        </div>
    </div>
  )
}
