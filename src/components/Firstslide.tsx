import React from "react";
import Header from "./Header";
import Video from "../assets/bg.gif";

function Firstslide() {
  return (
    <div className="w-full h-[100vh] bg-[#000] font-Helvetica">
      <Header />
      <img
        src={Video}
        alt=""
        className="absolute md:bottom-0 md:right-0 md:w-auto md:h-[70vh] w-full h-[50vh] bottom-[30vh] right-0"
      />
      <div className="md:w-[60vw] z-[1000] nw:text-8xl md:text-7xl leading-[110%] text-6xl text-white absolute top-[30vh] text-center md:text-left md:ml-20 font-bold w-full">
        Powerful for developers. Fast for everyone.
      </div>
      <div className="mx-auto pt-10 w-full md:hidden absolute bottom-[10vh] flex flex-col items-center">
        <button
          type="button"
          className="mr-1 bg-greenit duration-250 transition-all 
            hover:bg-white border-2 border-solid border-black px-4 py-3 my-2 hover:mb-2 text-black cursor-pointer font-Helvetica max-w-[180px]"
          style={{ borderRadius: "2.25rem" }}
        >
          START BUILDING
        </button>

        <button
          type="button"
          className="ml-1 duration-250 transition-all 
            hover:bg-white border-[1px] border-solid hover:text-black 
            border-white px-4 py-3 hover:mb-2 text-white cursor-pointer 
            font-Helvetica max-w-[240px] my-2"
          style={{ borderRadius: "2.25rem" }}
        >
          READ DOCUMENTATION
        </button>
      </div>
    </div>
  );
}

export default Firstslide;
