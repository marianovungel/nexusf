import React from 'react'
import './Solicitation.css'
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Solicitation() {
  return (
    <div id='rejectedContainer' className='w-full flex flex-row items-center justify-between bg-blend-lighten gap-3 py-3 hover:bg-cyan-50'>
        <div className='flex flex-row items-center justify-start gap-3 px-3'>
            <img className='w-20 h-20 rounded-full' src="./image/NEXUS.png" alt="" />
            <div className='flex flex-col items-start justify-center gap-1'>
                <b className='font-medium'>Nexus Artigo</b>
                <p>O  <b className='font-medium'>Lourenço Passos</b> solicitor para ser colaborador no seu artigo <b className='font-medium'>Desempennho computacional</b>...</p>
            </div>
        </div>
        <div className='px-3 h-full flex flex-col items-end justify-center gap-3'>
            <BsThreeDots size={24} color='gray' />
            <div className='flex flex-row items-center justify-end gap-3'>
                <FaRegCircleXmark size={35} />
                <FaRegCircleCheck size={35} className='text-sky-700' />
            </div>
        </div>
    </div>
  )
}
