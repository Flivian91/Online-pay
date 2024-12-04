import Link from "next/link";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
function PersonalDropDown({onClose}) {
  return (
    <div className="hidden xl:flex fixed top-20 left-0 bg-[#012169] px-24 py-6 w-full  text-white items-center justify-between border-b-2 border-white">
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-8">
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">
              How PayPal Works
            </h3>
            <p className="text-xs tracking-wide">
              What you can do with a pesonal account
            </p>
          </Link>
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">Pay Online</h3>
            <p className="text-xs tracking-wide">
              Online payments without borders
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">Send Payments</h3>
            <p className="text-xs tracking-wide">
              Send payments locally or abroad
            </p>
          </Link>
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">Get paid</h3>
            <p className="text-xs tracking-wide">
              Request payments from almost anyone
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">
              Get the PayPal App
            </h3>
            <p className="text-xs tracking-wide">
              Manage your account on your mobile
            </p>
          </Link>
          <Link href={"/"} className="hover:underline ">
            <h3 className="font-semibold mb-1 tracking-wide">
              Seach for Deals
            </h3>
            <p className="text-xs tracking-wide">
              Pay with PayPal amd save money
            </p>
          </Link>
        </div>
      </div>
      <div className="place-self-start">
        <button onClick={onClose} className="text-4xl border border-transparent rounded active:border active:border-white">
          <LiaTimesSolid />
        </button>
      </div>
    </div>
  );
}

export default PersonalDropDown;
