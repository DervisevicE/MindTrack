import React from "react";
import learnAboutUs from '../../assets/learnAboutUs.png'
import illustration2 from '../../assets/illustration2.png'

const About = () => {
    return (

        <div id="about" className="flex mt-32  justify-start">
            <div>
                <img className="mt-16 w-[70%]" src={learnAboutUs} />
                <p className="mt-5 text-[18px]">
                    Mindtrack is a mental health support app that was created to provide a comprehensive
                    solution for those <br />struggling with mental health issues. Our team of psychologists is
                    dedicated to ensuring that everyone has access <br /> to the tools and resources they need to
                    achieve optimal mental wellness.</p>
                <p className="mt-16 text-[18px]">
                    We believe that mental health is just as important as <br /> physical health, and we're passionate
                    about creating a safe and supportive community for those in need. Our app <br /> provides a
                    personalized experience that connects users with mental health resources, tools, and
                    support groups to <br /> help them track their progress and feel empowered on their journey to
                    wellness. Join us in our mission to promote <br /> mental health and well-being for all.
                    Icons are provided by icons8.com
                </p>
            </div>
            <div className=" -mr-[74px]">
                <img className="h-[700px] w-[600px]" src={illustration2} />
            </div>
        </div>
    )
}

export default About