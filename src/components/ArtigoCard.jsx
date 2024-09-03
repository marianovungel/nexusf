import React, { useState } from 'react'
// import { FaUsers } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ArtigoCard() {
    const [allText, setAllText] = useState("resumoDescArtigo")

    const setShowAllText =()=>{
        if(allText === "resumoDescArtigoall"){
            setAllText("resumoDescArtigo")
        }else{
            setAllText("resumoDescArtigoall")
        }
    }
  return (
    <div className='w-full flex flex-col items-center justify-start border-1 border-gray-300 rounded-md p-3 mb-3'>
        <div id='rejectedContainer' className='w-full mx-auto flex flex-row items-center justify-between bg-blend-lighten gap-3 py-3'>
            <div className='flex flex-row items-center justify-start gap-3 px-3'>
                <img className='w-20 h-20 rounded-full' src="./image/NEXUS.png" alt="" />
                <div className='flex flex-col items-start justify-center gap-1'>
                    <b className='font-medium text-3xl '>Nexus Artigo</b>
                    <p>FullStack.JS Desenvolvedor Web & Mobile</p>
                    <small>01/2024</small>
                </div>
            </div>
            <button className='bg-[#23272F] px-3 py-2 text-white text-md flex flex-row justify-center items-center rounded-lg border-0'>Colaborar</button>
        </div>
        <h2 className='text-center text-2xl text-black py-2 w-full'>Desenvolvimento Front-end na época póis pandemia da covid-19.</h2>
        <p className='resumoDescArtigo'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat inventore maiores sit tempore repellat nostrum 
            exercitationem rem deleniti saepe. Laborum aliquid sed 
            labore iure sint ullam repellendus unde corporis tempore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat inventore maiores sit tempore repellat nostrum 
            exercitationem rem deleniti saepe. Laborum aliquid sed 
            labore iure sint ullam repellendus unde corporis tempore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat inventore maiores sit tempore repellat nostrum 
            exercitationem rem deleniti saepe. Laborum aliquid sed 
            labore iure sint ullam repellendus unde corporis tempore.
        </p>
        <p onClick={setShowAllText} className='text-sky-700 cursor-poiter text-xl flex flex-row justify-center items-center gap-2'>
            ver mais
            {allText === "resumoDescArtigo" ? (<IoIosArrowDropdownCircle size={24} color='gray' />) : <IoIosArrowDropupCircle size={24} color='gray' /> }
        </p>
    </div>
  )
}
