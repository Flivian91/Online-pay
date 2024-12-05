import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center h-full w-full">
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
