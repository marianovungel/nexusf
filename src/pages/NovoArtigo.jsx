import React from 'react'

export default function NovoArtigo() {
  return (
    <div className='w-2/4 pb-3 mt-3 mx-auto flex flex-col justify-start items-center gap-3'>
      <div className='w-full flex justify-between items-center gap-3'>
        <p>Tema do Artigo</p>
        <input type="text" placeholder='Tema' className='p-2 outline-none shadow-md rounded-md w-3/4 text-[#666]' />
      </div>
      <textarea name=""  maxLength={500} className='w-full h-52 max-h-52 p-2 outline-none shadow-md rounded-md text-[#666]' placeholder='Breve Resumo...'></textarea>
      <div className='w-full flex flex-col items-center justify-start gap-3'>
        <p className='w-full text-start flex justify-start items-start'>Escolha o Tamplaite</p>
        <div className='w-full flex flex-row justify-start items-center gap-3 overflow-x-scroll'>
          <div className='w-44 min-w-44 h-36 bottom-0 shadow-md my-2 rounded-md relative cursor-pointer'>Template 1</div>
          <div className='w-44 min-w-44 h-36 bottom-0 shadow-md my-2 rounded-md relative cursor-pointer'>Template 2</div>
          <div className='w-44 min-w-44 h-36 bottom-0 shadow-md my-2 rounded-md relative cursor-pointer'>Template 2</div>
          <div className='w-44 min-w-44 h-36 bottom-0 shadow-md my-2 rounded-md relative cursor-pointer'>Template 2</div>
          <div className='w-44 min-w-44 h-36 bottom-0 shadow-md my-2 rounded-md relative cursor-pointer'>Template 3</div>
          <div className='w-44 min-w-44 h-36 bottom-0 shadow-md my-2 rounded-md relative cursor-pointer'>Template 4</div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-start gap-3 my-3'>
        <div className='w-full flex flex-row justify-between items-center gap-3'>
          <input type="text" placeholder='Nome do colaborador' className='p-2 outline-none shadow-md rounded-md w-3/4 text-[#666]' />
          <button className='px-3 py-2 bg-[#23272F] text-white rounded-md bottom-0 shadow-md cursor-pointer'>Pesquisar</button>
        </div>

        <div className='w-full flex flex-row justify-between items-center gap-3 my-2'>
          <div className='w-3/4 flex flex-row justify-start items-center gap-2'>
            <img src="" alt="" className='w-10 h10 rounded-full border-none shadow-md' />
            <p>Mariano António</p>
          </div>
          <button className='px-3 py-2 bg-[#23272F] text-white rounded-md bottom-0 shadow-md cursor-pointer'>Adicionar</button>
        </div>
        
      </div>
      <div className='w-full flex flex-row items-center justify-between gap-3'>
        <p>Visibilidade</p>
        <div className='w-3/5 flex flex-row justify-end items-center gap-3'>
          <button className='px-3 py-2 bg-white text-[#23272F] rounded-md bottom-1 border-slate-700 shadow-md cursor-pointer'>Privado</button>
          <button className='px-3 py-2 bg-[#23272F] text-bold text-white rounded-md bottom-0 shadow-md cursor-pointer'>Público</button>
        </div>
      </div>

      <div className='w-full flex justify-start items-center py-4'>
        <button className='px-4 py-2 bg-[#1f8ef1] text-bold text-white rounded-md bottom-0 shadow-md cursor-pointer'>Criar Artigo</button>
      </div>
    </div>
  )
}
