import React, { useState } from 'react'
import { FaBook } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { SobreProfile, ArtigoList, GrupList } from '../components/index';
import { FaUsers } from "react-icons/fa";

export default function Grup() {
    const [show, setShow] = useState("sobre")

    const MenuSetting =(menuItems)=>{
        setShow(menuItems)

        setTimeout(()=>{
            console.log(show)
        }, 3000)
    }
  return (
    <div className='w-full py-0'>
        <div id='fullscreenProfile' className='w-full py-4 shadow-md'>
            <div id='rejectedContainer' className='w-3/4 mx-auto flex flex-row items-center justify-between bg-blend-lighten gap-3 py-2'>
                <div className='flex flex-row items-center justify-start gap-3 px-3'>
                    <div className='flex flex-col items-start justify-center gap-1'>
                        <small>GRUPO</small>
                        <b className='font-medium text-3xl'>Grupo Nome Nexus</b>
                        <p>FullStack.JS Desenvolvedor Web & Mobile</p>
                        <small>Desde: <i>01/2024</i></small>
                    </div>
                </div>
                <div className='px-3 h-full flex flex-col items-end justify-center gap-3'>
                    <FaUserPlus size={24} color='gray' className='cursor-pointer hover:text-[#000]' />
                    <div className='flex flex-row items-center justify-end gap-3'>
                        <button className='px-3 py-2 bg-[#23272F] text-white text-bold flex flex-row justify-center items-center rounded-lg gap-2 border-0'><FaBook size={24} /> Novo Artigo</button>
                        <button className='px-3 py-2 text-[#23272F] text-bold flex flex-row justify-center items-center rounded-lg border-1 gap-2 border-[#23272F]'><FaUsers size={24} /> Editar</button>
                    </div>
                </div>
            </div>
            
        </div>

        <section className='w-3/5 flex flex-row h-full items-start justify-between gap-2 mx-auto mt-3'>
            <div className='w-60 flex flex-col justify-start items-start'>
                <h3 className='w-full flex justify-start pl-6 items-center py-2 hover:bg-cyan-50 text-xl text-[#111] font-medium bg-cyan-50 rounded-md cursor-pointer' onClick={()=> MenuSetting("sobre")}> Sobre</h3>
                <h3 className='w-full flex justify-start pl-6 items-center py-2 hover:bg-cyan-50 text-xl text-[#111] font-medium cursor-pointer' onClick={()=> MenuSetting("artigo")}>Artigos</h3>
                <h3 className='w-full flex justify-start pl-6 items-center py-2 hover:bg-cyan-50 text-xl text-[#111] font-medium cursor-pointer' onClick={()=> MenuSetting("grupo")} >Membos</h3>
                <h3 className='w-full flex justify-start pl-6 items-center py-2 hover:bg-cyan-50 text-xl text-[#111] font-medium cursor-pointer' onClick={()=> MenuSetting("grupo")} >Chat</h3>
                <h3 className='w-full flex justify-start pl-6 items-center py-2 hover:bg-cyan-50 text-xl text-[#111] font-medium cursor-pointer' onClick={()=> MenuSetting("grupo")} >Vídeo</h3>
            </div>

            <div id='borderLerftProfile' className='w-5/6 h-full '>
                <GrupList />
                <GrupList />
                <ArtigoList />
                <ArtigoList />
                <ArtigoList />
                <ArtigoList />
                <SobreProfile />
            </div>
        </section>
    </div>
  )
}
