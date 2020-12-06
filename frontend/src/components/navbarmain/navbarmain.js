import React,{useState} from 'react'
import './navbarmainStyles.css'
import { Navbar, Nav } from 'react-bootstrap'
import {FaBars, FaTimes} from 'react-icons/fa'
import $ from 'jquery'
function Navbarmain() {
    const toggleActive = ()=>{
        $(".navbar-wrapper .nav-items").toggleClass("active");
        setCloseBtn(!closebtn)
    }
    const [closebtn, setCloseBtn]  = useState(false);
    return (
        <div className = "navbar-wrapper">
            <div className = "nav-brand">
                <span>False9</span>
                <div className = "nav-ham" onClick = {()=>{toggleActive()}}>
                {closebtn?<FaTimes/>:<FaBars/>}
                </div>
            </div>
            <div className = "nav-items">
                <div className = "per-item">Home</div>
                <div className = "per-item">Leagues&Competitions</div>
                <div className = "per-item">Matches</div>
            </div>
            
        
        </div>
    )
}

export default Navbarmain
