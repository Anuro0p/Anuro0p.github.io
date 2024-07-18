import React from "react";

const Header = ({ scrolled }) => {
  return (
    <nav
      class={`bg-transparent py-2 md:py-4 items-center fixed w-full top-0 ${
        scrolled ? "backdrop-blur-lg	" : ""
      }`}
    >
      <div class="flex justify-between px-4 mx-20 ">
        <div class="flex justify-between items-center">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M13.9868 5L10.0132 19.8297"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <button
            class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="flex justify-between items-center">
          <p class="p-2 lg:px-4 md:mx-1 text-white text-center border border-transparent  hover:text-[#FF520E] transition-colors duration-300">
            Home
          </p>
          <p class="p-2 lg:px-4 md:mx-1 text-white text-center border border-transparent  hover:text-[#FF520E] transition-colors duration-300">
            Skills
          </p>
          <p class="p-2 lg:px-4 md:mx-1 text-white text-center border border-transparent  hover:text-[#FF520E] transition-colors duration-300">
            About
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p class="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-[#FF520E]  rounded  hover:text-[#FF520E] transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
            Contact
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
