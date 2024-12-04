import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="paypal-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default loading;
