import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MenuLeft, MenuRight } from './index';
import { Link } from 'react-router-dom';
import { api_base_url } from '../Helper';
import { useUserStore } from '../lib/userStore';

export default function Menu() {
  const [tam, settam] = useState(0)
  const { currentUser } = useUserStore()

  const getData = async ()=>{
    await fetch(api_base_url + "/noticicadas", {
      mode:"cors",
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        userId: currentUser?.id,
      }),
    })
    .then((res)=> res.json())
      .then((data)=>{
          let getLength = data.notification
          let lengthNotify = getLength.length
          settam(lengthNotify)
      })
    }

    useEffect(()=>{
      getData()
    }, [])

  return (
    <header className=" sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white h-20">
      <MenuLeft />
      <h1 className="ml-2 text-gray-700 text-xl md:hidden sm:hidden">NEXUS</h1>
      <div id='searchId' className="mx-5 md:mx-20 flex flex-grow items-center px-2 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <IoMdSearch size={30} color="gray" />
        <input type="text" placeholder="Search" className="flex-grow px-2 text-base bg-transparent outline-none" />
      </div>
      <Link to='/notification'  className="mr-2 border-0 relative flex items-center cursor-pointer h-10 w-8">
        <IoNotifications size={30} color="gray"/>
        {tam > 0 && (<i style={{fontSize: 9, padding:1}} className='bg-red-600 text-white rounded-full absolute top-0 right-0 min-w-4 flex justify-center items-center'>{tam}</i>)}
      </Link>
      <MenuRight />
  </header>
  )
}
