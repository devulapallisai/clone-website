import React from "react";
import Other from "../assets/other.gif";

function Fourthslide() {
  return (
    <div className="bg-[#000] w-full pt-20 font-Helvetica">
      <br />
      <br />
      <div className="py-10 md:pl-20 relative">
        <img src={Other} alt="" className="md:w-[80vw] w-full" />
        <div
          className="absolute top-[-10vh] md:top-[-6vh] right-[8vw] w-[80vw] md:w-[450px] border-2 bg-greenit p-4 max-h-[300px] md:min-h-[40vh]
           border-greenit"
          style={{ borderRadius: "1.5rem" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-[105%]">
            Say hello
          </h1>
          <br />
          <p className="text-lg md:text-xl">
            Learn more about Solana and see what makes it great.
          </p>
          <br />
          <br />
          <button
            type="button"
            className="mr-1 bg-black duration-250 transition-all 
             border-2 border-solid border-black px-4 py-2 
              text-white hover:text-black hover:bg-white 
              cursor-pointer font-Helvetica text-sm"
            style={{ borderRadius: "2.25rem" }}
          >
            WATCH VIDEO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fourthslide;
