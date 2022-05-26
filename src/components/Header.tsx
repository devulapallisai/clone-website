import React from "react";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="bg-[rgba(0,0,0,.95)] p-5 font-Helvetica tracking-wide sticky top-0 left-0 w-full z-[10000000000]">
      <div className="flex justify-between w-[100%]">
        <img src={Logo} alt="logo" className="max-w-[150px]" />
        <div className="xmax:flex hidden flex-row-reverse text-white mr-10 w-[50%] justify-between">
          <a
            href="#"
            className="px-6 leading-5 hover:text-[#00ffbd] font-[600] text-lg cursor-pointer"
          >
            Ecosystem
          </a>
          <a
            href="#"
            className="px-6 leading-5 hover:text-[#00ffbd] font-[600] text-lg cursor-pointer"
          >
            Community
          </a>
          <a
            href="#"
            className="px-6 leading-5 hover:text-[#00ffbd] font-[600] text-lg cursor-pointer"
          >
            Validators
          </a>
          <a
            href="#"
            className="px-6 leading-5 hover:text-[#00ffbd] font-[600] text-lg cursor-pointer"
          >
            Network
          </a>
          <a
            href="#"
            className="px-6 leading-5 hover:text-[#00ffbd] font-[600] text-lg cursor-pointer"
          >
            Developers
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
