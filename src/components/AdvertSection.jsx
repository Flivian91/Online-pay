import Link from "next/link";
import React from "react";

function AdvertSection() {
  return (
    <div className="bg-[#f5f7fa] w-full py-4 flex items-center gap-5 md:gap-2 justify-center flex-wrap px-4">
      <h2 className="text-xl tracking-wide text-center">Looking for PayPal for your business or freelance needs?</h2>
      <Link
        className="text-[#0070ba] border-2 rounded-full border-[#0070ba] text-base px-6 py-2 font-semibold"
        href={"/"}
      >
        Explore Business Solutions
      </Link>
    </div>
  );
}

export default AdvertSection;
