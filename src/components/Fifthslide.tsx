import React from "react";
import WebP from "../assets/image.webp";

function Fifthslide() {
  return (
    <div className="bg-black font-Helvetica text-white">
      <br />
      <br />
      <br />
      <div className="w-full md:w-3/5 py-20 px-6 md:mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold py-2">Scale</h1>
        <h1 className="text-2xl md:text-4xl font-semibold">
          for global adoption
        </h1>
        <div className="text-lg md:text-xl">
          <br />
          Integrate once and never worry about scaling again. Solana ensures
          composability between ecosystem projects by maintaining a single
          global state as the network scales. Never deal with fragmented Layer 2
          systems or sharded chains.
        </div>
      </div>
      <img
        src={WebP}
        alt="webp"
        className="w-[95vw] md:w-[85vw] mx-auto h-auto"
      />
      <br />
      <br />
    </div>
  );
}

export default Fifthslide;
