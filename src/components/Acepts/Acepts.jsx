import React from 'react'
import './Acepts.css'
import { MdArticle } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

export default function Acepts() {
  return (
    <div id='rejectedContainer' className='w-full flex flex-row items-center justify-between bg-blend-lighten gap-3 py-3 hover:bg-cyan-50'>
        <div className='flex flex-row items-center justify-start gap-3 px-3'>
            <img className='w-20 h-20 rounded-full' src="./image/NEXUS.png" alt="" />
            <div className='flex flex-col items-start justify-center gap-1'>
                <b className='font-medium'>Nexus Artigo</b>
                <p>Tu foi aceito para ser colaborador do artigo Sobre <b className='font-medium'>Desempennho computacional</b>...</p>
                <button className='px-3 py-2 rounded-3xl font-normal shadow-md text-[#666] border-sky-700 border-1 bg-white flex flex-row justify-center items-center gap-2'>Acesse agora <MdArticle size={24} className='text-sky-700' /></button>
            </div>
        </div>
        <div className='px-3 h-full flex flex-col items-end justify-center gap-2'>
        <small className='w-full flex flex-row justify-end text-end'>15 min</small>
            <BsThreeDots size={24} color='gray' />
        </div>
    </div>
  )
}
