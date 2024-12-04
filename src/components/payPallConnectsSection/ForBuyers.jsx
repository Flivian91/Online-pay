import { IoArrowForward, IoArrowForwardCircleOutline, IoArrowForwardOutline } from "react-icons/io5";
import CardConnects from "./CardConnects";
import { useState } from "react";
import { BiArrowFromRight } from "react-icons/bi";
import { PiArrowArcRight } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";

function ForBuyers({ activeTab,active }) {
  
  const forBuyers = [
    {
      image: "/buyonline_browser1.png",
      text: "Sign up with just an email address and password.",
    },
    {
      image: "/buyonline_browser2.png",
      text: "Securely add your cards.",
    },
    {
      image: "/buyonline_browser3.png",
      text: "Use the PayPal button to check out with just an email address and password.",
    },
  ];
  return (
    <>
      <div className="md:hidden">
        <CardConnects
          tab={active}
          image={forBuyers[active - 1].image}
          text={forBuyers[active - 1].text}
          activeTab={activeTab}
        />
      </div>

      <div className="hidden md:flex px-0 gap-2 lg:gap-6 items-center ">
        <CardConnects
          activeTab={activeTab}
          label={"1"}
          image={"/buyonline_browser1.png"}
          text={" with just an email address and password."}
        />
        {
          <MdArrowBackIos className="size-10 min-w-8  font-serif font-light text-gray-300 rotate-180 mb-20" />
        }

        <CardConnects
          label={"2"}
          image={"/buyonline_browser2.png"}
          text={"Securely add your cards."}
        />
        {
          <MdArrowBackIos className="size-10 min-w-8 font-serif font-light text-gray-300 rotate-180 mb-20" />
        }
        <CardConnects
          label={"3"}
          image={"/buyonline_browser3.png"}
          text={
            "Use the PayPal button to check out with just an email address and password."
          }
        />
      </div>
    </>
  );
}

export default ForBuyers;
