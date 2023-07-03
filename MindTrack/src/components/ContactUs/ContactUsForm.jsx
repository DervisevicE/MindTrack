import React from "react";

const ContactUsForm = () => {
    return(
        <form className="m-auto mt-8 w-[50%] rounded-lg max-w-lg bg-white p-8 border-2 border-greenColor">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        rows="5"
                        placeholder="Enter your message"
                    ></textarea>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-greenColor text-white font-bold py-2 px-14 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Send
                    </button>
                </div>
            </form>

    )
}

export default ContactUsForm