"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function NotFound() {
  const router = useRouter();
  function handleChange() {
    router.push("https://www.paypal.com/signin");
  }
  return (
    <div className="fixed top-0 left-0 h-screen w-full z-30 bg-white flex flex-col">
      <div className="bg-[#f5f5f5] py-4 px-12 md:px-20">
        <Image
          className="transform scale-150 -translate-y-1 "
          src={"/logo.svg"}
          alt="Paypal Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-grow flex items-center justify-center px-2">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-5xl font-semibold text-gray-500 tracking-wide">Sorry</h1>
          <p className="tracking-wide text-xl text-gray-500 text-center">We were not able to process your request. Please try again.</p>
          <button
            onClick={handleChange}
            className="border border-gray-400 text-gray-500 px-5 mt-5 py-2 rounded text-base font-bold"
          >
            Try Again
          </button>
        </div>
      </div>
      <div className="gap-5 flex items-center justify-center text-gray-500 py-6 bg-[#f5f5f5]">
        <span className="font-semibold tracking-wide text-sm">
          &copy; 1999 - 2024 PayPal
        </span>

        <Link
          className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
          href={"/"}
        >
          Legal
        </Link>
        <Link
          className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
          href={"/"}
        >
          Privacy
        </Link>
        <Link
          className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
          href={"/"}
        >
          Policy updates
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
