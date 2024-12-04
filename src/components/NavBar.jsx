"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import BusinessDropDown from "./BusinessDropDown";
import PersonalDropDown from "./PersonalDropDown";

function NavBar() {
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);

  const handleOutsideClick = () => {
    setIsBusinessOpen(false);
    setIsPersonalOpen(false);
  };

  return (
    <div
      className="relative flex items-center justify-between bg-white px-4 lg:px-28 shadow"
      onMouseLeave={handleOutsideClick}
    >
      {/* Menu area */}
      <button className="text-[#0070ba] border-2 rounded-full border-[#0070ba] text-base px-4 py-2  xl:hidden font-semibold flex items-center gap-3">
        <IoMdMenu />
        <span>Menu</span>
      </button>
      {/* Logo */}
      <div className="hidden xl:flex">
        <Image
          className="transform scale-150 -translate-y-1 "
          src={"/logo.svg"}
          alt="Paypal Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Links Section */}
      <div className="items-center gap-4 hidden xl:flex ">
        {/* Personal Dropdown */}
        <div
          onMouseEnter={() => setIsPersonalOpen(true)}
          onMouseLeave={() => setIsPersonalOpen(false)}
          className="relative"
        >
          <button
            onClick={() => setIsPersonalOpen(!isPersonalOpen)}
            className={
              "flex hover:border-b-4 group border-b-4 border-transparent hover:border-[#0070ba] items-center gap-2 py-6 px-3 text-lg font-semibold text-[#2c2e2f] uppercase"
            }
          >
            <span className="text-gray-500">Personal</span>
            <IoIosArrowDown
              className={`text-2xl transition-transform duration-500 ${
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
              "flex hover:border-b-4 group border-b-4 border-transparent hover:border-[#0070ba] items-center gap-2 py-6 px-3 text-lg font-semibold text-[#2c2e2f] uppercase"
            }
          >
            <span className="text-gray-500">Business</span>
            <IoIosArrowDown
              className={`text-2xl transition-transform duration-500 ${
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
            "flex hover:border-b-4 group border-b-4 border-transparent text-gray-500 hover:border-[#0070ba] items-center gap-2 py-6 px-3 text-lg font-semibold  uppercase"
          }
        >
          Partners and Developers
        </button>
      </div>

      {/* Logo At the center */}
      <div className="xl:hidden">
        <Image
          className="xl:hidden"
          src={"/single-logo.png"}
          alt="Paypal Logo"
          width={100}
          height={100}
        />
      </div>

      {/* Auth Links */}
      <div className="flex items-center gap-3">
        <Link
          className="text-[#0070ba] border-2 rounded-full border-[#0070ba] text-base px-6 py-2 font-semibold underline"
          href={"/signin"}
        >
          Log In
        </Link>
        <Link
          className="bg-[#0070ba] text-white hidden xl:flex border-2 rounded-full border-[#0070ba] text-base px-4 py-2 font-semibold"
          href={"/signin"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
