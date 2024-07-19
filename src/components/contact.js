// ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <section
      style={{ zIndex: 99 }}
      className="z-1 relative  alegreya-head border-t border-gray-700 flex flex-col md:flex-row items-center justify-center min-h-screen  pr-12"
    >
      <div className="df-reverse shadow-lg p-12 mr-24  rounded-3xl py-18 shadow-lg w-full md:w-1/2 lg:w-2/5">
        <form className="space-y-14">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-5 border rounded-lg df-bg  df-text focus:outline-none focus:ring-2 focus:ring-teal-500"
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
              className="w-full p-5 border rounded-lg df-bg  df-text focus:outline-none focus:ring-2 focus:ring-teal-500"
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
              className="w-full p-3 border rounded-lg df-bg  df-text focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-teal-500 df-text font-semibold rounded-lg hover:bg-teal-400 transition"
          >
            Send
          </button>
        </form>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8    md:text-left">
        <h2 className="text-7xl font-bold mb-4">Let’s Connect!</h2>
        <p className="mb-8 text-xl font-thin">
          Got an exciting project hustle in mind? Let’s transform it into a
          groundbreaking reality.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              width="27"
              height="21"
              viewBox="0 0 27 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.7407 0.0742188H1.74072C1.47551 0.0742188 1.22115 0.179576 1.03362 0.367112C0.846079 0.554649 0.740723 0.809002 0.740723 1.07422V18.0742C0.740723 18.6047 0.951436 19.1134 1.32651 19.4884C1.70158 19.8635 2.21029 20.0742 2.74072 20.0742H24.7407C25.2712 20.0742 25.7799 19.8635 26.1549 19.4884C26.53 19.1134 26.7407 18.6047 26.7407 18.0742V1.07422C26.7407 0.809002 26.6354 0.554649 26.4478 0.367112C26.2603 0.179576 26.0059 0.0742188 25.7407 0.0742188ZM13.7407 10.718L4.31197 2.07422H23.1695L13.7407 10.718ZM10.0795 10.0742L2.74072 16.8005V3.34797L10.0795 10.0742ZM11.5595 11.4305L13.0595 12.8117C13.244 12.9811 13.4853 13.075 13.7357 13.075C13.9862 13.075 14.2275 12.9811 14.412 12.8117L15.912 11.4305L23.162 18.0742H4.31197L11.5595 11.4305ZM17.402 10.0742L24.7407 3.34672V16.8017L17.402 10.0742Z"
                fill="#00B6D2"
              />
            </svg>
            <a href="mailto:anuroopvijayan@12@gmail.com" className="text-lg">
              anuroopvijayan@12@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              width="19"
              height="29"
              viewBox="0 0 19 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7407 0.0742188H3.74072C2.94507 0.0742188 2.18201 0.390289 1.6194 0.952899C1.05679 1.51551 0.740723 2.27857 0.740723 3.07422V25.0742C0.740723 25.8699 1.05679 26.6329 1.6194 27.1955C2.18201 27.7581 2.94507 28.0742 3.74072 28.0742H15.7407C16.5364 28.0742 17.2994 27.7581 17.862 27.1955C18.4247 26.6329 18.7407 25.8699 18.7407 25.0742V3.07422C18.7407 2.27857 18.4247 1.51551 17.862 0.952899C17.2994 0.390289 16.5364 0.0742188 15.7407 0.0742188ZM2.74072 6.07422H16.7407V22.0742H2.74072V6.07422ZM3.74072 2.07422H15.7407C16.0059 2.07422 16.2603 2.17958 16.4478 2.36711C16.6354 2.55465 16.7407 2.809 16.7407 3.07422V4.07422H2.74072V3.07422C2.74072 2.809 2.84608 2.55465 3.03362 2.36711C3.22115 2.17958 3.47551 2.07422 3.74072 2.07422ZM15.7407 26.0742H3.74072C3.47551 26.0742 3.22115 25.9689 3.03362 25.7813C2.84608 25.5938 2.74072 25.3394 2.74072 25.0742V24.0742H16.7407V25.0742C16.7407 25.3394 16.6354 25.5938 16.4478 25.7813C16.2603 25.9689 16.0059 26.0742 15.7407 26.0742Z"
                fill="#00B6D2"
              />
            </svg>
            <a href="tel:+15551234567" className="text-lg">
              +91 7907864801
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7407 6.07422C10.7518 6.07422 9.78512 6.36746 8.96287 6.91687C8.14063 7.46628 7.49976 8.24717 7.12132 9.1608C6.74289 10.0744 6.64387 11.0798 6.8368 12.0497C7.02972 13.0196 7.50593 13.9105 8.20519 14.6098C8.90445 15.309 9.79537 15.7852 10.7653 15.9781C11.7352 16.1711 12.7405 16.0721 13.6541 15.6936C14.5678 15.3152 15.3487 14.6743 15.8981 13.8521C16.4475 13.0298 16.7407 12.0631 16.7407 11.0742C16.7407 9.74814 16.2139 8.47637 15.2763 7.53868C14.3386 6.601 13.0668 6.07422 11.7407 6.07422ZM11.7407 14.0742C11.1474 14.0742 10.5674 13.8983 10.074 13.5686C9.58066 13.239 9.19615 12.7704 8.96908 12.2223C8.74202 11.6741 8.68261 11.0709 8.79837 10.4889C8.91412 9.90701 9.19984 9.37246 9.6194 8.9529C10.039 8.53334 10.5735 8.24762 11.1555 8.13186C11.7374 8.01611 12.3406 8.07552 12.8888 8.30258C13.437 8.52964 13.9055 8.91416 14.2351 9.40751C14.5648 9.90086 14.7407 10.4809 14.7407 11.0742C14.7407 11.8699 14.4247 12.6329 13.862 13.1955C13.2994 13.7581 12.5364 14.0742 11.7407 14.0742ZM11.7407 0.0742188C8.82436 0.0775272 6.02839 1.23751 3.9662 3.2997C1.90402 5.36188 0.744031 8.15785 0.740723 11.0742C0.740723 14.9992 2.55447 19.1592 5.99072 23.1055C7.53475 24.8887 9.27254 26.4944 11.172 27.893C11.3401 28.0108 11.5404 28.0739 11.7457 28.0739C11.951 28.0739 12.1513 28.0108 12.3195 27.893C14.2154 26.4938 15.9498 24.8881 17.4907 23.1055C20.922 19.1592 22.7407 14.9992 22.7407 11.0742C22.7374 8.15785 21.5774 5.36188 19.5152 3.2997C17.4531 1.23751 14.6571 0.0775272 11.7407 0.0742188ZM11.7407 25.8242C9.67447 24.1992 2.74072 18.2305 2.74072 11.0742C2.74072 8.68727 3.68893 6.39808 5.37676 4.71026C7.06459 3.02243 9.35377 2.07422 11.7407 2.07422C14.1277 2.07422 16.4169 3.02243 18.1047 4.71026C19.7925 6.39808 20.7407 8.68727 20.7407 11.0742C20.7407 18.228 13.807 24.1992 11.7407 25.8242Z"
                fill="#00B6D2"
              />
            </svg>

            <p className="text-lg">Kochi, Kerala, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
