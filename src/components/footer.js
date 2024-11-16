// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" alegreya-head md:border-none border-t border-gray-700 mt-8  py-8">
      <div className="container mx-auto px-4 grid gap-4 md:grid-cols-3 grid-cols-1  justify-between">
        <div className='justify-center hidden md:block md:text-start text-center'>Anuroop Vijayan</div>
        <div className="flex gap-8 item-center justify-center">
          <div>Contact</div>
          <div>About</div>
          <div>LinkedIn</div>
        </div>
        <div className="md:justify-end justify-center flex gap-4 md:aligh-right">
          <svg
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/anuroopvijayan/",
                "_blank"
              );
            }}
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.24072 0.316895C1.41229 0.316895 0.740723 0.988465 0.740723 1.81689V16.8169C0.740723 17.6453 1.41229 18.3169 2.24072 18.3169H17.2407C18.0691 18.3169 18.7407 17.6453 18.7407 16.8169V1.81689C18.7407 0.988465 18.0691 0.316895 17.2407 0.316895H2.24072ZM6.26148 4.31961C6.26711 5.27586 5.55133 5.86508 4.70195 5.86086C3.90179 5.85664 3.20429 5.21961 3.20851 4.32102C3.21273 3.47586 3.8807 2.79664 4.74836 2.81633C5.62867 2.83602 6.26711 3.48149 6.26148 4.31961ZM10.0204 7.07865H7.50043H7.49902V15.6385H10.1624V15.4388C10.1624 15.0589 10.1621 14.6789 10.1618 14.2988C10.161 13.285 10.1601 12.2701 10.1653 11.2566C10.1667 11.0105 10.1779 10.7546 10.2412 10.5197C10.4788 9.64219 11.2678 9.07549 12.1481 9.21479C12.7134 9.30329 13.0874 9.63099 13.2449 10.164C13.342 10.4972 13.3856 10.8558 13.3898 11.2032C13.4012 12.2508 13.3996 13.2984 13.398 14.3461C13.3974 14.7159 13.3968 15.0859 13.3968 15.4557V15.6371H16.0687V15.4318C16.0687 14.9798 16.0685 14.5279 16.0682 14.076C16.0677 12.9465 16.0671 11.817 16.0701 10.6871C16.0715 10.1766 16.0167 9.67319 15.8915 9.17959C15.7045 8.44549 15.3178 7.838 14.6892 7.39929C14.2434 7.08708 13.754 6.88599 13.207 6.86349C13.1447 6.8609 13.0819 6.85751 13.0188 6.8541C12.7391 6.83898 12.4548 6.82363 12.1874 6.87755C11.4224 7.03083 10.7503 7.38099 10.2426 7.99829C10.1836 8.06909 10.1259 8.141 10.0398 8.24829L10.0204 8.27259V7.07865ZM3.42236 15.6413H6.07314V7.08422H3.42236V15.6413Z"
              fill="#F7FFFB"
            />
          </svg>
          <svg
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.instagram.com/anuroopistaken/",
                "_blank"
              );
            }}
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7407 0.316895H5.74072C2.9793 0.316895 0.740723 2.55547 0.740723 5.31689V13.3169C0.740723 16.0783 2.9793 18.3169 5.74072 18.3169H13.7407C16.5021 18.3169 18.7407 16.0783 18.7407 13.3169V5.31689C18.7407 2.55547 16.5021 0.316895 13.7407 0.316895ZM16.9907 13.3169C16.9852 15.1095 15.5333 16.5614 13.7407 16.5669H5.74072C3.94807 16.5614 2.49621 15.1095 2.49072 13.3169V5.31689C2.49621 3.52424 3.94807 2.07238 5.74072 2.06689H13.7407C15.5333 2.07238 16.9852 3.52424 16.9907 5.31689V13.3169ZM14.4907 5.56689C15.043 5.56689 15.4907 5.11917 15.4907 4.56689C15.4907 4.01461 15.043 3.56689 14.4907 3.56689C13.9384 3.56689 13.4907 4.01461 13.4907 4.56689C13.4907 5.11917 13.9384 5.56689 14.4907 5.56689ZM9.74072 4.81689C7.25544 4.81689 5.24072 6.83161 5.24072 9.31689C5.24072 11.8022 7.25544 13.8169 9.74072 13.8169C12.226 13.8169 14.2407 11.8022 14.2407 9.31689C14.2434 8.12259 13.7701 6.97646 12.9256 6.13197C12.0811 5.28748 10.935 4.81423 9.74072 4.81689ZM6.99072 9.31689C6.99072 10.8357 8.22192 12.0669 9.74072 12.0669C11.2595 12.0669 12.4907 10.8357 12.4907 9.31689C12.4907 7.79809 11.2595 6.56689 9.74072 6.56689C8.22192 6.56689 6.99072 7.79809 6.99072 9.31689Z"
              fill="#F7FFFB"
            />
          </svg>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p className="mb-2">© 2024 Anuroop Vijayan. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="hover:underline">Privacy Policy</p>
          <p className="hover:underline">Terms of Service</p>
          <p className="hover:underline">Cookies Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
