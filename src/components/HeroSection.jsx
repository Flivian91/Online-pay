import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
      }}
      className="h-[480px] w-full flex items-center justify-center"
    >
      <div className="flex flex-col gap-6 items-center text-center md:w-3/4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl uppercase text-center text-white italic">
          Move your money around the world with M-Pesa and paypal
        </h1>
        <p className="text-base font-semibold text-stone-100 tracking-wide text-center">
          Just link your M-PESA and PayPal accounts and enjoy a world of
          possibilities
        </p>
        <Link
          className="bg-[#0070ba] hover:bg-[#0070bae5] text-white border-2 rounded-full border-[#0070ba] text-lg px-12 md:w-1/3 py-3 font-semibold"
          href={"/signup"}
        >
          Link Account
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
