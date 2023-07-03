import React from "react";
import contactUs from '../../assets/contactUs.png'
import illustration from '../../assets/illustration.png'
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
    return (
        <div id="contactUs" className="mt-16 flex flex-col items-center">

            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <img className="m-auto w-[70%]" src={contactUs} />
                    <p className="ml-40">
                        If you want to know something more about us, feel free to send us a message.
                    </p>
                    <ContactUsForm />
                </div>

                <div className="relative">
                    <img className="absolute -right-24 top-28 h-[700px] w-[700px] " src={illustration} />
                </div>
               
            </div>

        </div>
    )
}


export default ContactUs