import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="w-full flex  justify-center bg-[#60cdff]">
      <div className="md:space-y-12 space-y-24 pb-1 pt-16">
        <div className="flex items-center justify-center">
          <div className="flex items-center rounded-full border-2 border-black">
            <button className="py-3 px-6 bg-black rounded-full text-white tracking-wide text-base font-semibold">
              Personal
            </button>
            <button className="py-3 px-6 bg-transparent rounded-full text-black tracking-wide text-base font-semibold">
              Business
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-black lg:text-8xl  text-2xl w-full transform scale-150 sm:scale-100 sm:text-6xl sm:w-[400px] text-center lg:w-[1000px] font-san tracking-tight font-semibold">
            Pay, send, and save <br/> smarter
          </h1>
        </div>
        <div className=" flex items-center justify-center px-3">
          <div className="bg-white py-4 px-2 rounded-3xl w-full h-[400px] flex items-center flex-col">
            <h1 className="text-4xl text-gray-700 font-bold py-4">PayPal</h1>
            <Image
              className="w-full h-full transform rounded-3xl"
              src={"/hero.jpg"}
              alt="Hero Image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
