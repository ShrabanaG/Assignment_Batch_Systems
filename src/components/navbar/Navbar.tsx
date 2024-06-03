import React from 'react'
import icon from "../../assets/icon.png";
import logo from "../../assets/logo.png";
import "./navbar.css";


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <div className='logo-container flex justify-between items-center'>
                    <span><img src={icon} alt='app-icon' /></span>
                    <span><img src={logo} alt="app-logo" /></span>
                </div>
                <div className='nav-links'>
                    {["Home", "About Us", "Pricing", "Features"].map((each, idx) => {
                        return (
                            <div className={idx === 0 ? 'nav-link-active' : 'nav-link'} key={idx}>{each}</div>
                        )
                    })}
                </div>
            </div>

            <button className='download-btn btn-container'>
                Download
            </button>
        </div>
    )
}

export default Navbar