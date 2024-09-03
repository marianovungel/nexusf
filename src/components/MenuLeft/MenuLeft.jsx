import React from 'react'
import './MenuLeft.css'
import { Link } from 'react-router-dom';

export default function MenuLeft() {
    function openNav() {
        document.getElementById("mySidebar").style.width = "150px";
        document.getElementById("main").style.marginLeft = "150px";
        
        const larguraDisponivel = window.innerWidth;
        
        if(larguraDisponivel < 890){
            document.getElementById("nexusId").style.display = "none";
        }
      }
      
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";

        const larguraDisponivel = window.innerWidth;
        
        if(larguraDisponivel < 890){
            document.getElementById("nexusId").style.display = "flex";
        }
      }

  return (
    <div className='flex items-center'>
        <div id="mySidebar" className="sidebar">
            <i className="closebtn" onClick={closeNav}>x</i>
            <Link to="/">Home</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/chat">Chat</Link>
        </div>

        <div id="main">
            <button className="openbtn flex items-center justify-center" onClick={openNav} id='nexusId' >
                <img src="./image/nexustext.png" alt="NEXUS LOGO" className="cursor-pointer h-16 w-16 rounded-full" />
            </button>
        </div>
    </div>
  )
}
