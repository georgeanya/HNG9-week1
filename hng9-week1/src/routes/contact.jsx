import React from "react";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div>
      <div className="px-4 lg:px-86">
        <h2 className="font-semibold text-4xl mt-16 lg:mt-38">Contact Me</h2>
        <p className="mt-4 text-lg">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="mt-12">
          <div className="mb-6">
            <label
              htmlFor="first_name"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="last_name"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="yourname@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="h-32 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
            />
          </div>
          <div className="flex items-start mb-8">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-base font-normal text-gray-900"
            >
              You agree to providing your data to George who may contact you.
            </label>
          </div>
          <button
                      type="submit"
                      id="btn__submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center block w-full"
          >
            Send message
          </button>
        </form>
      </div>
      <div className="px-4 lg:px-28">
        <hr className="mt-16" />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
