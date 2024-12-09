import Image from "next/image";
import React from "react";
import LoginForm from "../forms/LoginForm";
import FooterLogin from "./FooterLogin";

function Login() {
  return (
    <div className="w-full flex flex-col items-center gap-5 ">
      <div className="flex-grow w-full md: px-2  md:w-[460px]">
        <div className="flex flex-col gap-5 mt-10 w-full md:w-[27rem] items-center md:border-2 md:border-gray-200 rounded-lg py-5 ">
          <div className="w-12 h-12">
            <Image
              src={"/single-logo.png"}
              alt="Paypal Logo"
              width={100}
              height={100}
            />
          </div>
          {/* login form */}
          <LoginForm />

          <div className="flex items-center justify-center gap-4">
            <Image
              src="/usa.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-5 h-4 object-cover"
            />
            <p className="border-r text-gray-600 border-gray-300 text-base font-bold px-1">
              English
            </p>
            <p className="border-r text-gray-500 border-gray-300 text-base px-1">
              Français
            </p>
            <p className="border-r text-gray-500 border-gray-300 text-base px-1">
              Español
            </p>
            <p className="border-r text-gray-500 border-gray-300 text-base px-1">
              中文
            </p>
          </div>
        </div>
      </div>
      {/* login footer */}
      <FooterLogin />
    </div>
  );
}

export default Login;
