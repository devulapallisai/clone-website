import React from "react";

function Thirdslide() {
  return (
    <div className="bg-[#000] py-28 font-Helvetica text-white">
      <div className="flex md:flex-row flex-col mx-6 md:mx-20 justify-between">
        <div className="my-auto text-4xl md:text-7xl  w-full  md:w-[45vw] tracking-wide font-bold leading-[110%] text-center md:text-left py-4 md:py-0">
          Join the fastest growing ecosystem
        </div>
        <div className="my-auto text-xl ml-0 md:ml-10 md:w-[40vw] text-center md:text-left">
          Solana is the fastest blockchain in the world and the fastest growing
          ecosystem in crypto, with thousands of projects spanning DeFi, NFTs,
          Web3 and more.
          <br />
          <br />
          <button
            type="button"
            className="mr-1 bg-violetit duration-250 transition-all 
            hover:bg-white border-2 border-solid border-black px-5 py-3 
            hover:border-2 text-white text-sm hover:text-black cursor-pointer font-Helvetica"
            style={{ borderRadius: "2.25rem" }}
          >
            EXPLORE ECOSYSTEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thirdslide;
