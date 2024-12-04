"use client";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-white z-10">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="paypal-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
