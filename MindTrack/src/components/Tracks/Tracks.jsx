import React from "react";

import socialPhobiaTitle from '../../assets/socialPhobiaTitle.png'
import depressionTitle from '../../assets/depressionTitle.png'
import anxietyTitle from '../../assets/anxietyTitle.png'
import sleepImprovementTitle from '../../assets/sleepImprovementTitle.png'
import hyperactivityTitle from '../../assets/hyperactivityTitle.png'
import anxiety2Title from '../../assets/anxiety2Title.png'

const Tracks = () => {
    return (
        <div id="tracks" className="mt-32 justify-center">

            <div className="rounded-lg bg-greenColor p-8 w-[80%] mb-8 m-auto ">
                <h1 className="text-[32px] font-extrabold text-greenTextColor">Welcome to Tracks!</h1>
                <p className="mt-4 text-slate-100">
                    MindTrack team offers a variety of tracks for users to choose from, each designed to target a specific
                    area of mental wellnes. <br /> Here you can learn more about the tracks! 
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                </p>
            </div>

            <div className="grid grid-cols-2  gap-20">

                <div className="rounded-lg bg-socialPhobia p-8 ">
                    <img className="w-[60%]" src={socialPhobiaTitle} />
                    <p className="mt-4">
                        Soical Phobia track includes content that helps users manage excessive fear and anxiety
                        when interacting with others in social solutions...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                    </p>
                </div>

                <div className="rounded-lg bg-depression p-8">
                    <img className="w-[60%]" src={depressionTitle} />
                    <p className="mt-4">
                        Soical Phobia track includes content that helps users manage excessive fear and anxiety
                        when interacting with others in social solutions...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                    </p>
                </div>

                <div className="rounded-lg bg-anxiety p-8">
                    <img className="w-[60%]" src={anxietyTitle} />
                    <p className="mt-4">
                        Soical Phobia track includes content that helps users manage excessive fear and anxiety
                        when interacting with others in social solutions...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                    </p>
                </div>

                <div className="rounded-lg bg-sleepImprovement p-8">
                    <img className="w-[70%]" src={sleepImprovementTitle} />
                    <p className="mt-4">
                        Soical Phobia track includes content that helps users manage excessive fear and anxiety
                        when interacting with others in social solutions...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                    </p>
                </div>

                <div className="rounded-lg bg-hyperactivity p-8">
                    <img className="w-[90%]" src={hyperactivityTitle} />
                    <p className="mt-4">
                        Soical Phobia track includes content that helps users manage excessive fear and anxiety
                        when interacting with others in social solutions...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                    </p>
                </div>

                <div className="rounded-lg bg-anxiety2 p-8">
                    <img className="w-[60%]" src={anxiety2Title} />
                    <p className="mt-4">
                        Soical Phobia track includes content that helps users manage excessive fear and anxiety
                        when interacting with others in social solutions...

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero eu tellus tristique posuere quis eu nisi. Praesent faucibus, purus nec commodo finibus, dui justo iaculis augue, vel tincidunt purus sem at risus. 
                    </p>
                </div>

            </div>

        </div>
    )
}


export default Tracks