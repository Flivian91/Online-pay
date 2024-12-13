"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import BusinessDropDown from "./BusinessDropDown";
import PersonalDropDown from "./PersonalDropDown";
import { BiMenu } from "react-icons/bi";

function NavBar() {
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);

  const handleOutsideClick = () => {
    setIsBusinessOpen(false);
    setIsPersonalOpen(false);
  };

  return (
    <div
      className="relative flex items-center gap-2 justify-between bg-white px-0 lg:px-8 shadow py-2 lg:py-4"
      onMouseLeave={handleOutsideClick}
    >
      {/* Menu area
      <button className="text-[#0070ba] border-2 rounded-full border-[#0070ba] text-base px-4 py-2  xl:hidden font-semibold flex items-center gap-3">
        <IoMdMenu />
        <span>Menu</span>
      </button> */}
      {/* Logo */}
      <div className="">
        <div className=" h-9 w-9 md:w-[54px] md:h-[54px]">
          <Image
            className=" object-contain w-full"
            src={"/paypal.svg"}
            alt="Paypal Logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Links Section */}
      <div className="flex-1 items-center justify-start gap-4 hidden lg:flex ">
        {/* Personal Dropdown */}
        <div
          onMouseEnter={() => setIsPersonalOpen(true)}
          onMouseLeave={() => setIsPersonalOpen(false)}
          className="relative"
        >
          <button
            onClick={() => setIsPersonalOpen(!isPersonalOpen)}
            className={
              "flex group items-center gap-2 py-2 px-3 text-base rounded-full border hover:bg-[#60cdff4f] hover:text-black font-semibold text-black"
            }
          >
            <span>Personal</span>
            <IoIosArrowDown
              className={`text-base transition-transform duration-500 ${
                isPersonalOpen ? "-rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isPersonalOpen && (
            <PersonalDropDown onClose={() => setIsPersonalOpen(false)} />
          )}
        </div>

        {/* Business Dropdown */}
        <div
          onMouseEnter={() => setIsBusinessOpen(true)}
          onMouseLeave={() => setIsBusinessOpen(false)}
          className="relative"
        >
          <button
            onClick={() => setIsBusinessOpen(!isBusinessOpen)}
            className={
              "flex group items-center gap-2 py-2 px-3 text-base rounded-full hover:bg-[#60cdff4f] hover:text-black font-semibold text-black"
            }
          >
            <span>Small Business</span>
            <IoIosArrowDown
              className={`text-base transition-transform duration-500 ${
                isBusinessOpen ? "-rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isBusinessOpen && (
            <BusinessDropDown onClose={() => setIsBusinessOpen(false)} />
          )}
        </div>
        {/* Business Dropdown */}
        <div
          onMouseEnter={() => setIsBusinessOpen(true)}
          onMouseLeave={() => setIsBusinessOpen(false)}
          className="relative"
        >
          <button
            onClick={() => setIsBusinessOpen(!isBusinessOpen)}
            className={
              "flex group items-center gap-2 py-2 px-3 text-base rounded-full hover:bg-[#60cdff4f] hover:text-black font-semibold text-black"
            }
          >
            <span>Enterprise</span>
            <IoIosArrowDown
              className={`text-base transition-transform duration-500 ${
                isBusinessOpen ? "-rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isBusinessOpen && (
            <BusinessDropDown onClose={() => setIsBusinessOpen(false)} />
          )}
        </div>

        {/* Static Link */}
        <button
          className={
            "flex group items-center gap-2 py-2 px-3 text-base rounded-full border border-transparent hover:border-gray-400/40 hover:text-black font-semibold text-black"
          }
        >
          Developer
        </button>
      </div>

      {/* Auth Links */}
      <div className="flex items-center gap-3">
        <Link
          className="text-black rounded-full hidden lg:block border border-transparent text-xs sm:text-base px-4 hover:border-gray-400/30 py-2 font-semibold"
          href={"https://www.paypal.com/us/cshelp/personal"}
        >
          Help
        </Link>
        <Link
          className="text-black border-2 md:border-4 rounded-full border-black text-xs sm:text-base transform hover:scale-105 px-6 py-1 md:py-2 font-semibold"
          href={"/signin"}
        >
          Log In
        </Link>
        <Link
          className="bg-black text-white flex  rounded-full border-2 md:border-4 border-transparent hover:text-black hover:border-black hover:bg-[#0070e0ab] text-xs sm:text-base px-4 py-1 md:py-2 font-semibold"
          href={"/signin"}
        >
          Sign Up
        </Link>
        <button className="p-2 rounded-full lg:hidden border border-transparent hover:border-gray-300">
          <BiMenu className="text-2xl rounded" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
