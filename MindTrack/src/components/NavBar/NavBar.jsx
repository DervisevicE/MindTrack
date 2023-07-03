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
                <li className="menuList text-[16px]">Home</li>
                <li className="menuList text-[16px]">About us</li>
                <li className="menuList text-[16px]">Tracks</li>
                <li className="menuList text-[16px]">How it works</li>
                <li className="menuList text-[16px]">Contact us</li>
            </div>
        </div>
    )
}

export default NavBar