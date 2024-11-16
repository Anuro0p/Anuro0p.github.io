import React from "react";

const Navbar = () => {
  return (
    <div className="w-full p-4 mt-8 fixed topz ">
      <nav className="df-bg1 df-text shadow-lg shadow-[#111] w-full py-4 px-8 flex   justify-between items-center rounded-full ">
        <ul className="flex space-x-8">
          <li>
            <p data-cursor-hover className="hidden md:block hover:text-gray-400 font-light alegreya-head df-text">
              Home
            </p>
          </li>
          <li>
            <p data-cursor-hover id='data-cursor-hover' className="hidden md:block hover:text-gray-400 alegreya-head data-cursor-hover">Projects</p>
          </li>
          <li>
            <p data-cursor-hover className="hidden md:block hover:text-gray-400 alegreya-head">Team</p>
          </li>
        </ul>
        <div data-cursor-hover className="flex items-center space-x-2">
          <span className="text-xl">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4907 4.32434V2.07434C11.4907 1.87543 11.5697 1.68466 11.7104 1.54401C11.851 1.40336 12.0418 1.32434 12.2407 1.32434C12.4396 1.32434 12.6304 1.40336 12.7711 1.54401C12.9117 1.68466 12.9907 1.87543 12.9907 2.07434V4.32434C12.9907 4.52325 12.9117 4.71402 12.7711 4.85467C12.6304 4.99532 12.4396 5.07434 12.2407 5.07434C12.0418 5.07434 11.851 4.99532 11.7104 4.85467C11.5697 4.71402 11.4907 4.52325 11.4907 4.32434ZM18.2407 12.5743C18.2407 13.761 17.8888 14.9211 17.2295 15.9078C16.5703 16.8945 15.6332 17.6635 14.5368 18.1176C13.4405 18.5717 12.2341 18.6906 11.0702 18.4591C9.90629 18.2275 8.8372 17.6561 7.99808 16.817C7.15897 15.9779 6.58752 14.9088 6.35601 13.7449C6.1245 12.581 6.24332 11.3746 6.69745 10.2782C7.15157 9.18188 7.92061 8.24481 8.9073 7.58552C9.894 6.92623 11.054 6.57434 12.2407 6.57434C13.8315 6.57608 15.3566 7.20878 16.4814 8.33362C17.6063 9.45846 18.239 10.9836 18.2407 12.5743ZM16.7407 12.5743C16.7407 11.6843 16.4768 10.8143 15.9823 10.0743C15.4879 9.33425 14.7851 8.75748 13.9628 8.41688C13.1405 8.07629 12.2357 7.98717 11.3628 8.16081C10.4899 8.33444 9.68808 8.76302 9.05874 9.39236C8.42941 10.0217 8.00082 10.8235 7.82719 11.6964C7.65356 12.5693 7.74267 13.4741 8.08327 14.2964C8.42386 15.1187 9.00064 15.8215 9.74066 16.316C10.4807 16.8104 11.3507 17.0743 12.2407 17.0743C13.4338 17.0731 14.5777 16.5986 15.4213 15.755C16.265 14.9113 16.7395 13.7674 16.7407 12.5743ZM5.7101 7.10497C5.85083 7.2457 6.0417 7.32476 6.24072 7.32476C6.43975 7.32476 6.63062 7.2457 6.77135 7.10497C6.91208 6.96424 6.99114 6.77336 6.99114 6.57434C6.99114 6.37532 6.91208 6.18445 6.77135 6.04372L5.27135 4.54372C5.13062 4.40299 4.93975 4.32392 4.74072 4.32392C4.5417 4.32392 4.35083 4.40299 4.2101 4.54372C4.06937 4.68445 3.99031 4.87532 3.99031 5.07434C3.99031 5.27336 4.06937 5.46424 4.2101 5.60497L5.7101 7.10497ZM5.7101 18.0437L4.2101 19.5437C4.06937 19.6844 3.99031 19.8753 3.99031 20.0743C3.99031 20.2734 4.06937 20.4642 4.2101 20.605C4.35083 20.7457 4.5417 20.8248 4.74072 20.8248C4.93975 20.8248 5.13062 20.7457 5.27135 20.605L6.77135 19.105C6.84103 19.0353 6.89631 18.9526 6.93402 18.8615C6.97173 18.7705 6.99114 18.6729 6.99114 18.5743C6.99114 18.4758 6.97173 18.3782 6.93402 18.2872C6.89631 18.1961 6.84103 18.1134 6.77135 18.0437C6.70167 17.974 6.61894 17.9188 6.52789 17.881C6.43685 17.8433 6.33927 17.8239 6.24072 17.8239C6.14218 17.8239 6.0446 17.8433 5.95355 17.881C5.86251 17.9188 5.77978 17.974 5.7101 18.0437ZM18.2407 7.32434C18.3392 7.32442 18.4368 7.30508 18.5279 7.26744C18.6189 7.2298 18.7016 7.17459 18.7713 7.10497L20.2713 5.60497C20.4121 5.46424 20.4911 5.27336 20.4911 5.07434C20.4911 4.87532 20.4121 4.68445 20.2713 4.54372C20.1306 4.40299 19.9397 4.32392 19.7407 4.32392C19.5417 4.32392 19.3508 4.40299 19.2101 4.54372L17.7101 6.04372C17.6051 6.14861 17.5336 6.2823 17.5046 6.42786C17.4756 6.57342 17.4904 6.72432 17.5473 6.86143C17.6041 6.99855 17.7003 7.11573 17.8237 7.19813C17.9472 7.28053 18.0923 7.32446 18.2407 7.32434ZM18.7713 18.0437C18.6306 17.903 18.4397 17.8239 18.2407 17.8239C18.0417 17.8239 17.8508 17.903 17.7101 18.0437C17.5694 18.1844 17.4903 18.3753 17.4903 18.5743C17.4903 18.7734 17.5694 18.9642 17.7101 19.105L19.2101 20.605C19.2798 20.6746 19.3625 20.7299 19.4536 20.7676C19.5446 20.8053 19.6422 20.8248 19.7407 20.8248C19.8393 20.8248 19.9368 20.8053 20.0279 20.7676C20.1189 20.7299 20.2017 20.6746 20.2713 20.605C20.341 20.5353 20.3963 20.4526 20.434 20.3615C20.4717 20.2705 20.4911 20.1729 20.4911 20.0743C20.4911 19.9758 20.4717 19.8782 20.434 19.7872C20.3963 19.6961 20.341 19.6134 20.2713 19.5437L18.7713 18.0437ZM4.74072 12.5743C4.74072 12.3754 4.6617 12.1847 4.52105 12.044C4.3804 11.9034 4.18964 11.8243 3.99072 11.8243H1.74072C1.54181 11.8243 1.35104 11.9034 1.21039 12.044C1.06974 12.1847 0.990723 12.3754 0.990723 12.5743C0.990723 12.7733 1.06974 12.964 1.21039 13.1047C1.35104 13.2453 1.54181 13.3243 1.74072 13.3243H3.99072C4.18964 13.3243 4.3804 13.2453 4.52105 13.1047C4.6617 12.964 4.74072 12.7733 4.74072 12.5743ZM12.2407 20.0743C12.0418 20.0743 11.851 20.1534 11.7104 20.294C11.5697 20.4347 11.4907 20.6254 11.4907 20.8243V23.0743C11.4907 23.2733 11.5697 23.464 11.7104 23.6047C11.851 23.7453 12.0418 23.8243 12.2407 23.8243C12.4396 23.8243 12.6304 23.7453 12.7711 23.6047C12.9117 23.464 12.9907 23.2733 12.9907 23.0743V20.8243C12.9907 20.6254 12.9117 20.4347 12.7711 20.294C12.6304 20.1534 12.4396 20.0743 12.2407 20.0743ZM22.7407 11.8243H20.4907C20.2918 11.8243 20.101 11.9034 19.9604 12.044C19.8197 12.1847 19.7407 12.3754 19.7407 12.5743C19.7407 12.7733 19.8197 12.964 19.9604 13.1047C20.101 13.2453 20.2918 13.3243 20.4907 13.3243H22.7407C22.9396 13.3243 23.1304 13.2453 23.2711 13.1047C23.4117 12.964 23.4907 12.7733 23.4907 12.5743C23.4907 12.3754 23.4117 12.1847 23.2711 12.044C23.1304 11.9034 22.9396 11.8243 22.7407 11.8243Z"
                fill="#F7FFFB"
              />
            </svg>
          </span>
          <span className=" text-l alegreya-head">
            Anuroop Vijayan
          </span>
        </div>
        <ul className=" flex space-x-8">
          <li>
            <p data-cursor-hover className="hidden md:block hover:text-gray-400 alegreya-head">About</p>
          </li>
          <li>
            <p data-cursor-hover
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.instagram.com/anuroopistaken/",
                  "_blank"
                );
              }}
              className="hover:text-gray-400 alegreya-head hidden md:block  "
            >
              Instagram
            </p>
          </li>
          <li>
            <p data-cursor-hover className="hover:text-gray-400 alegreya-head hidden md:block ">Contact</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
