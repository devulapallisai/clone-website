import React from "react";
import first from "../assets/first.webp";
import Des from "../assets/dec.webp";

function Sixthslide() {
  return (
    <div className="bg-black w-full font-Helvetica text-white">
      <div className="flex md:flex-row flex-col mx-[5vw] justify-between">
        <div
          className="w-full my-2 md:w-[40vw] max-h-[800px] flex flex-col pt-10 bg-bgcolor"
          style={{ borderRadius: "1.5rem" }}
        >
          <h1 className="text-4xl  md:text-7xl px-10">Low cost, forever</h1>
          <p className="text-lg md:text-xl px-10">
            Solana's scalability ensures transactions remain less than $0.01 for
            both developers and users.
          </p>
          <img
            src={first}
            style={{ borderRadius: "1.5rem" }}
            alt="first"
            className="w-auto h-auto"
          />
        </div>
        <div
          className="w-full md:w-[40vw] my-2 max-h-[800px] flex flex-col pt-10 bg-bgcolor"
          style={{ borderRadius: "1.5rem" }}
        >
          <h1 className="text-4xl md:text-7xl px-10">Low cost, forever</h1>
          <p className="text-lg md:text-xl px-10">
            Solana's scalability ensures transactions remain less than $0.01 for
            both developers and users.
          </p>
          <img
            src={first}
            alt="first"
            style={{ borderRadius: "1.5rem" }}
            className="w-auto h-auto"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="relative">
        <img src={Des} alt="" className="w-full h-auto" />
        <div className="w-3/5 mt-[-20vh] md:mt-[-40vh] ml-[20vw] py-20">
          <h1 className="text-4xl md:text-6xl font-semibold py-2">
            Decentralized
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold">and secure</h1>
          <div className="text-lg md:text-xl">
            <br />
            Not only is Solana ultra-fast and low cost, it is censorship
            resistant. The Solana network is spread over thousands of
            independent nodes — which means that your transactions are always
            safe.
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Sixthslide;
