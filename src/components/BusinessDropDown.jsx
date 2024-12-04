import Link from "next/link";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

function BusinessDropDown({ onClose }) {
  return (
    <div className="hidden xl:flex fixed top-20 left-0 bg-[#012169] px-24 py-6 w-full flex text-white items-center justify-between border-b-2 border-white">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-8">
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">
              All business solutions
            </h3>
            <p className="text-xs tracking-wide">See our range of products</p>
          </Link>
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">
              Accept online payments
            </h3>
            <p className="text-xs tracking-wide">Get paid on your website</p>
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">Send invoices</h3>
            <p className="text-xs tracking-wide">
              Create and email online invoices
            </p>
          </Link>
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">
              PayPal for Fleelancers
            </h3>
            <p className="text-xs tracking-wide">
              Grow your freelance business
            </p>
          </Link>
        </div>
      </div>
      <div className="place-self-start">
        <button
          onClick={onClose}
          className="text-4xl border border-transparent rounded active:border active:border-white"
        >
          <LiaTimesSolid />
        </button>
      </div>
    </div>
  );
}

export default BusinessDropDown;
