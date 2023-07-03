import React from "react";
import logowhite from '../../assets/logowhite.png'

const Footer = () => {
    return (
        <div className="mt-32 border-2 rounded-t-3xl bg-blackColor p-8 -ml-[77px] -mr-[74px]">
            <div className="footer flex flex-col items-center">
                <div className="logoDiv flex">
                    <img className="w-24 h-24" src={logowhite}></img>
                </div>

                <div className="text-[12px] text-slate-100">
                    <p>Copyright 2023 MindTrack. All Rights Reserved</p>
                </div>

            </div>
        </div>
    )
}

export default Footer