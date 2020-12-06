import React from 'react'
import './homepageStyles.css'
import EuropeLogos from '../../assets/EuropeLogos.png'
function Homepage() {
    return (
        <div className = "homepage-wrapper">
            <div></div>
            <div className = "home-title">
                Welcome to False9
            </div>
            <div className = "home-subtitle">
            The home of the best football leagues
            </div>  
            <img className = "home-img" src = {EuropeLogos} />
            
        </div>
    )
}

export default Homepage
