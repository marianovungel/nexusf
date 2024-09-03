import React from 'react'
import './MenuRight.css'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MenuRight() {
  
  return (
    <div className="dropdown">
    <button className="dropbtn"><FaUserCircle size={30} color="gray"/></button>
    <div className="dropdown-content">
        <Link to="/profile">Meu Perfil</Link>
        <Link to="/profile">Novo Artigo</Link>
        <Link to="/profile">Meus Artigos</Link>
        <Link to="/grupo">Meus Grupos</Link>
    </div>
    </div>
  )
}
