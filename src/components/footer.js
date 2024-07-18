// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" alegreya-head  py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1  justify-between">
        <div>Anuroop Vijayan</div>
        <div className="flex gap-8 item-center justify-center">
          <div>Contact</div>
          <div>About</div>
          <div>LinkedIn</div>
        </div>
        <div className="justify-end flex aligh-right">hellooooooooo</div>
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
