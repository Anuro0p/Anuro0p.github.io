// ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <section
      style={{ zIndex: 99 }}
      className="z-1 relative  alegreya-head border-t border-gray-700 flex flex-col md:flex-row items-center justify-center min-h-screen  p-8"
    >
      <div className="bg-gray-800 p-12  rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/2">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-gray-900 font-semibold rounded-lg hover:bg-teal-400 transition"
          >
            Send
          </button>
        </form>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8    md:text-left">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect!</h2>
        <p className="mb-8">
          Got an exciting project hustle in mind? Let’s transform it into a
          groundbreaking reality.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="material-icons text-teal-500">email</span>
            <a href="mailto:anuroopvijayan@12@gmail.com" className="text-lg">
              anuroopvijayan@12@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="material-icons text-teal-500">phone</span>
            <a href="tel:+15551234567" className="text-lg">
              +91 7907864801
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="material-icons text-teal-500">location_on</span>
            <p className="text-lg">Kochi, Kerala, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
