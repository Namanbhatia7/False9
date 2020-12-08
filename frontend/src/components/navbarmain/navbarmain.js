import React,{useState,useEffect} from 'react'
import './navbarmainStyles.css'
import {Link,useLocation} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import $ from 'jquery'
function Navbarmain() {
    const location = useLocation();
    //helper functions
    const toggleActive = ()=>{
        $(".navbar-wrapper .nav-items").toggleClass("active");
        setCloseBtn(!closebtn)
    }
    const [closebtn, setCloseBtn]  = useState(false);

    //side-effects
    useEffect(()=>{
        if(location.pathname === '/')
            $(".navbar-wrapper").addClass("back-transparent");
        else{
            $(".navbar-wrapper").removeClass("back-transparent");
        }
    },[location.pathname])
    return (
        <div className = "navbar-wrapper">
            <div className = "nav-brand">
                <span>False9</span>
                <div className = "nav-ham" onClick = {()=>{toggleActive()}}>
                {closebtn?<FaTimes/>:<FaBars/>}
                </div>
            </div>
            <div className = "nav-items">
                <Link to = "/" className = "per-item">Home</Link>
                <Link to = "/competitions" className = "per-item">Leagues&Competitions</Link>
                <Link to = "/" className = "per-item">Matches</Link>
            </div>


        </div>
    )
}

export default Navbarmain
