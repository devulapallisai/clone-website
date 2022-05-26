import React from "react";

function Seventhslide() {
  return (
    <div className="w-full px-16 md:px-20 bg-black font-Helvetica">
      <div className="flex md:flex-row flex-col">
        <div
          className="my-2 md:mx-2 w-full md:w-1/2 bg-pinkshade min-h-[280px] md:min-h-[400px] flex flex-col justify-between p-8 md:p-10"
          style={{ borderRadius: "1.5rem" }}
        >
          <div>
            <h1 className="text-3xl md:text-6xl font-Helvetica pb-2">
              Solana Community
            </h1>
            <h1 className="text-lg md:text-xl pb-2">
              There's something for everybody. Follow along, chat on Discord, or
              read up on what we’re doing.
            </h1>
          </div>
          <button
            type="button"
            className="mr-1 bg-black duration-250 transition-all 
             border-2 border-solid border-black px-4 py-2 
              text-white hover:text-black hover:bg-white 
              cursor-pointer font-Helvetica text-sm max-w-[140px]"
            style={{ borderRadius: "2.25rem" }}
          >
            Learn more
          </button>
        </div>
        <div
          className="my-2 md:mx-2 w-full md:w-1/2 bg-greenit min-h-[280px] md:min-h-[400px] p-8 md:p-10 flex flex-col justify-between"
          style={{ borderRadius: "1.5rem" }}
        >
          <div>
            <h1 className="text-3xl md:text-6xl font-Helvetica pb-2">
              Solana Community
            </h1>
            <h1 className="text-lg md:text-xl pb-2">
              There's something for everybody. Follow along, chat on Discord, or
              read up on what we’re doing.
            </h1>
          </div>
          <button
            type="button"
            className="mr-1 bg-black duration-250 transition-all 
             border-2 border-solid border-black px-4 py-2 
              text-white hover:text-black hover:bg-white 
              cursor-pointer font-Helvetica text-sm max-w-[140px]"
            style={{ borderRadius: "2.25rem" }}
          >
            Learn more
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Seventhslide;
