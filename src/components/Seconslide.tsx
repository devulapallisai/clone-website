import React from "react";

function Seconslide() {
  return (
    <div className="w-full  bg-[#000] font-Helvetica">
      <div className="mx-16 md:ml-20">
        <div className="buttons pt-10 md:block hidden">
          <button
            type="button"
            className="mr-1 bg-greenit duration-250 transition-all 
            hover:bg-white border-2 border-solid border-black px-4 py-3 hover:mb-2 text-black cursor-pointer font-Helvetica"
            style={{ borderRadius: "2.25rem" }}
          >
            START BUILDING
          </button>
          <button
            type="button"
            className="ml-1 duration-250 transition-all 
            hover:bg-white border-[1px] border-solid hover:text-black 
            border-white px-4 py-3 hover:mb-2 text-white cursor-pointer 
            font-Helvetica"
            style={{ borderRadius: "2.25rem" }}
          >
            READ DOCUMENTATION
          </button>
        </div>
        <div className="pt-8 text-center md:text-left md:max-w-[50vw] text-white  font-[500] text-2xl leading-[117%] pb-20 font-Helvetica">
          Solana is a decentralized blockchain built to enable scalable,
          user-friendly apps for the world.
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="bg-greenit py-4">
        <div className="mx-4 text-[rgb(19,19,19)] font-extralight">
          <div className="xmax:flex justify-between hidden w-[100%]">
            <div className="flex justify-between mx-4 w-[45%] border-b-[1px] border-black">
              <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
              <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
            </div>
            <div className="flex justify-between mx-4 w-[45%] border-b-[1px] border-black">
              <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
              <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
            </div>
          </div>
          <div className="xmax:flex justify-between hidden w-[100%]">
            <div className="flex justify-between mx-4 w-[45%] border-black">
              <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
              <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
            </div>
            <div className="flex justify-between mx-4 w-[45%] border-black">
              <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
              <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
            </div>
          </div>
          <div className="xmax:hidden flex flex-col">
            <div className="flex justify-between  w-[100%]">
              <div className="flex justify-between mx-4 w-[95%] border-b-[1px] border-black">
                <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
                <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
              </div>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="flex justify-between mx-4 w-[95%] border-b-[1px] border-black">
                <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
                <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
              </div>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="flex justify-between mx-4 w-[95%] border-b-[1px] border-black">
                <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
                <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
              </div>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="flex justify-between mx-4 w-[95%] border-b-[1px] border-black">
                <div className="py-8 max-w-[100px] text-xl mx-2">Hello</div>
                <div className="py-6 text-3xl mx-2 font-bold">Hello</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seconslide;
