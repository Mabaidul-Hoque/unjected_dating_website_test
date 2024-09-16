import React from "react";
import Image from "next/image";
import appLogo from "/public/assets/images/app-logo.svg";
import mobileImage from "/public/assets/images/download-now-icon.svg";
import menuIcon from "/public/assets/images/menu-cion.svg";

function Header() {
  return (
    <header className="sticky bg-white left-0 top-0 w-full z-20">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-11 h-[68px]">
        <div className="flex items-center">
          <a href="/">
            <Image
              src={appLogo}
              alt="app Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </a>
        </div>

        {/* COMMENTED FOR NOW */}
        {/* <div className="space-x-4 hidden md:flex">
        <button className="bg-[#000000] text-white px-4 py-2 rounded hover:bg-[#000000]">
          Login
        </button>
        <a href="#download-app-desktop-screen">
          <button className="bg-[#F7A293] text-white px-5 py-2 rounded hover:bg-[#F7A293]">
            Download now
          </button>
        </a>
      </div> */}

        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2 gap-3">
          <Image
            src={menuIcon}
            alt="menu icon"
            width={25}
            height={25}
            className="object-contain"
          />
          {/* COMMENTED FOR NOW */}
          {/* <a href="#download-app-mobile-screen">
          <Image
            src={mobileImage}
            alt="Mobile View Image"
            width={25}
            height={25}
            className="object-contain"
          />
        </a> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
