"use client";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading";
import TabbedComponent from "./TabbedComponent";

import CommonBtn from "../buttons/CommonBtn";

function ConnectSection() {
  const [activeTab, setActiveTab] = useState("sellers");
  const [active, setActive] = useState(1);
  function handleNext() {
    if (active === 3) return;
    setActive((t) => t + 1);
  }
  function handlePrevious() {
    if (active <= 1) return;
    setActive((t) => t - 1);
  }
  return (
    <div className="bg-customGray px-4 sm:px-16 md:px-4 lg:px-16 flex flex-col items-center gap-6 py-12">
      <Heading text={"PayPal connects buyers and sellers."} />
      <div>
        <div className="border-b-2 border-gray-300 flex justify-center gap-8  py-2">
          <h3
            onClick={() => {
              setActiveTab("buyers");
              setActive(1);
            }}
            className={`"font-bold text-lg scale-95 py-3  cursor-default px-2 border-b-2  -mb-3  " ${
              activeTab === "buyers"
                ? "border-buttonTextColor "
                : "border-transparent hover:border-buttonTextColor/80 hover:-translate-y-1 transition-all duration-200 hover:-mb-4"
            }`}
          >
            For buyers
          </h3>
          <h3
            onClick={() => {
              setActiveTab("sellers");
              setActive(1);
            }}
            className={`"font-bold text-lg scale-95 py-3  cursor-default px-2 border-b-2  -mb-3  " ${
              activeTab === "sellers"
                ? "border-buttonTextColor "
                : "border-transparent hover:border-buttonTextColor/80 hover:-translate-y-1 transition-all duration-200 hover:-mb-4"
            }`}
          >
            For sellers
          </h3>
        </div>
        <div>
          {/* tabbed component */}
          <TabbedComponent activeTab={activeTab} active={active} />
        </div>
      </div>
      <div className="flex justify-evenly md:hidden  w-full">
        <span onClick={handlePrevious} className="cursor-pointer">
          {" "}
          <IoIosArrowForward className="size-10 text-gray-600 rotate-180" />
        </span>
        <div className="flex gap-2">
          <div
            onClick={() => setActive(1)}
            className={`" w-4 h-4 rounded-full  border-2 border-gray-500 " ${
              active === 1 ? "bg-slate-600" : "bg-white"
            }`}
          ></div>
          <div
            onClick={() => setActive(2)}
            className={`" w-4 h-4 rounded-full border-2 border-gray-500 " ${
              active === 2 ? "bg-slate-600" : "bg-white"
            }`}
          ></div>
          <div
            onClick={() => setActive(3)}
            className={`" w-4 h-4 rounded-full border-2 border-gray-500 rounded-full" ${
              active === 3 ? "bg-slate-600" : "bg-white"
            }`}
          ></div>
        </div>

        <span onClick={handleNext} className="cursor-pointer">
          <IoIosArrowForward className="size-10 text-gray-600" />
        </span>
      </div>
      <div className="sm:w-96  w-48 flex mt-6 ">
        <CommonBtn text={"Learn More"} />
      </div>
    </div>
  );
}

export default ConnectSection;
