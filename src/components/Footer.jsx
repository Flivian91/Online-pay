import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-3 py-16 px-4 lg:px-24 bg-white">
      <div className="flex items-center justify-between border-b border-[#9b9ea1] py-2">
        <div className="flex items-center gap-5">
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Help
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Contact
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Fees
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Security
          </Link>
        </div>
        <div>
          <Image
            src="/usa.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-6 h-4 object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 xl:flex-row items-center justify-between">
        <div className="flex items-center gap-5 text-gray-500 ">
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            About
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Newsroom
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Jobs
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Developers
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Partner
          </Link>
        </div>
        <div className="gap-5 flex items-center text-gray-500">
          <span className="font-semibold tracking-wide text-sm">
            &copy; 1999 - 2024
          </span>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Accessibility
          </Link>
          <Link
            className="font-semibold tracking-wide text-sm md:text-lg hover:underline"
            href={"/"}
          >
            Cookies
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
            Legal
          </Link>
        </div>
      </div>
      <p className="text-xs md:text-sm tracking-wide text-gray-500 text-center md:text-start">
        PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a
        Major Payment Institution under the Payment Services Act 2019.
      </p>
    </div>
  );
}

export default Footer;
