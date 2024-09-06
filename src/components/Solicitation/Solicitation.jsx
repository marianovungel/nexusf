import React, { useState } from 'react'
import './Solicitation.css'
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { api_base_url } from '../../Helper';
import { useUserStore } from '../../lib/userStore';
import Swal from 'sweetalert2';

export default function Solicitation({ data }) {
    const { currentUser, superUser } = useUserStore()

    const RecuseNotification = async ()=>{
      await fetch(api_base_url + "/colaborar", {
        mode:"cors",
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          userNotificated: data.usernotify,  
          usernotifyName: superUser.name, 
          type: 1, 
          link: "", 
          ArtigoName: data.ArtigoName,
          usernotify: currentUser.id, 
          text: `Desta vez não foste aceite para ser colaborador do artigo ${data.ArtigoName}`, 
        }),
      })
      .then((res)=> res.json())
        .then((data)=>{
            if(data){
              Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Colaboração Solicitado!",
                  showConfirmButton: false,
                  timer: 1500
                });
              // console.log(data)
            }
        })
      }
    
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
              if(data.notification){
                toast.success("Solicitação Rejeitada com sucesso!")
              }
          })

          await RecuseNotification()
        }

    const AceptSolicitation = async ()=>{
        await fetch(api_base_url + "/aceptcolab", {
          mode:"cors",
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            colaborador:data?.usernotify,
            docId: data?.link,
          }),
        })
        .then((res)=> res.json())
          .then((data)=>{
              if(data.notification){
                toast.success("Solicitação Rejeitada com sucesso!")
              }
          })

          await RecuseNotification()
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
                <FaRegCircleXmark size={35} onClick={RegectSolicitation} className='cursor-pointer' />
                <FaRegCircleCheck size={35} onClick={AceptSolicitation} className='text-sky-700 cursor-pointer' />
            </div>
        </div>
    </div>
  )
}
