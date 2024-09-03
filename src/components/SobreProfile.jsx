import React from 'react'
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function SobreProfile() {
  return (
    <div className='w-full py-3 flex flex-col justify-start items-start gap-3'>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <FaSchool size={22} color='gray' />
            <p>Ensino médio - Sambizanga</p>
        </div>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <IoSchoolSharp size={22} color='gray' />
            <p>Formação Superior - UNILAB</p>
        </div>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <LiaSchoolSolid size={22} color='gray' />
            <p>Grau máximo de formação - Bachareu</p>
        </div>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <FaArrowTrendUp size={22} color='gray' />
            <p>Área de Formação - Engenharia da Computação</p>
        </div>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <FaHeart size={22} color='gray' />
            <p>Área de Interece - Desenvolvimento de softwares</p>
        </div>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <MdEmail size={22} color='gray' />
            <p>Email - vungemariano@gmail.com</p>
        </div>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <PiReadCvLogoFill size={22} color='gray' />
            <p>Lattes - vungemarariano</p>
        </div>
    </div>
  )
}
