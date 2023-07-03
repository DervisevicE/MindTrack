import React from "react";
import slogan from '../../assets/slogan.png'

const LandingPage = () => {
    return(
        <div className="flex flex-col items-center">
            <img className="mt-16 w-[55%]" src={slogan} />
            <p className="mt-5 text-[16px]"> Need help managing your mental health? MindTrack provides daily mood tracking, CBT excercises, 
                <br/> self-care resources, and professional support to help you take control of your mental well-being.
            </p>
            <button class="mt-10 text-[18px] border bg-greenColor text-white px-20 py-2.5 rounded-full">Get Started</button>
        </div>
    )
}

export default LandingPage