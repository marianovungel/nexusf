import React from 'react'
import './MenuRight.css'
// import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useUserStore } from "../../lib/userStore";

const AvatarULR = "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"

export default function MenuRight() {
  const { currentUser } = useUserStore()
  return (
    <div className="dropdown">
    <button className="dropbtn">
      {/* <FaUserCircle size={30} color="gray"/> */}
      <img className='w-8 h-8 rounded-full object-cover' src={currentUser?.avatar ? currentUser?.avatar : AvatarULR } alt="" />
      </button>
    <div className="dropdown-content">
        <Link to="/profile">Meu Perfil</Link>
        <Link to="/profile">Novo Artigo</Link>
        <Link to="/profile">Meus Artigos</Link>
        <Link to="/grupo">Meus Grupos</Link>
    </div>
    </div>
  )
}
