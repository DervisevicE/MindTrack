import React from "react";
import logo from '../../assets/logo.png'

const NavBar = () => {
    return(
        <div className="navBar flex justify-between items-center p-[2rem]">

            <div className="logoDiv flex">
                <img className="w-12 h-8" src={logo}></img>
                <h1 className="logo text-[25px]">Mind<strong>Track</strong></h1>
            </div>
            <div className="menu flex gap-8">
                <li className="menuList text-[16px]"><a href="#about">About</a></li>
                <li className="menuList text-[16px]"><a href="#tracks">Tracks</a></li>
                <li className="menuList text-[16px]"><a href="#contactUs">Contact us</a></li>
            </div>
        </div>
    )
}

export default NavBar