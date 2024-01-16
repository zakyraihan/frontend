import React from "react";
import Image from "next/image";
import NavigationBar from "./NavigationBar";

const LandingPage = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse md:justify-evenly items-center mt-28 ">
        <div className="text-center">
          <h1 className="text-xl text-[#4a4a4a] font-semibold text-center md:text-left md:mt-0 mt-16">
            Welcome
          </h1>
          <div className="flex md:flex-col md:gap-0 gap-2 flex-row items-start ">
            <h1 className="md:text-[4rem] text-[2rem] font-bold">
              Muhammad{" "}
              <span className="text-green-400 text-[2rem] font-bold">
                Zaky Raihan
              </span>
            </h1>
          </div>
          <div className="flex flex-row md:gap-2 gap-2">
            <span className="">
              #Selalu <span className="text-green-400">Ada</span> Pasti{" "}
              <span className="text-green-400">Bisa</span>
            </span>
            <div className=" border-r-2 border-r-green-400"></div>
            <span>#Jalanin <span className="text-green-400">Aja</span> Dulu</span>
          </div>
          <div className="flex justify-start mt-9" >
            <button className="bg-green-400 px-10 py-3 rounded-lg text-white font-medium">Explor</button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/tokopedia-icon-2048x2048-gjy2clad.png"
            alt=".."
            width={300}
            height={300}
            className="animate-spin-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
