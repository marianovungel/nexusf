import React from 'react'
import './ArtigoList.css'
import { FaFileInvoice } from "react-icons/fa6";
import { IoLockClosed } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

export default function ArtigoList() {
  return (
    <div id='artigolist'  className='w-full py-2 flex flex-row justify-between items-end text-#666 cursor-pointer hover:bg-[#F5F5F5]'>
        <div className='flex flex-row justify-start items-center gap-2 pl-2'>
          <FaFileInvoice size={22} color='gray' />
          <b>Artigo name</b>
        </div>
        <div className='flex flex-row justify-end items-center gap-2'>
          <i className='text-xs'>10/09/2024</i>
          <IoLockClosed size={28} color='gray' className='p-1 rounded-full bg-[#F5F5F5]' />
          <CiMenuKebab size={24} color='gray' className='cursor-pointer' />
        </div>
    </div>
  )
}
