import React from 'react'
import { FaUsers } from "react-icons/fa";

export default function GrupList() {
  return (
    <div className='w-full py-2 flex flex-row justify-between items-end text-#666 cursor-pointer hover:bg-[#F5F5F5]'>
        <div className='flex items-center justify-start gap-2 pl-2'>
            <FaUsers size={24} color='gray' />
            <b>Engenharia na sociedade...</b>
        </div>
    </div>
  )
}
