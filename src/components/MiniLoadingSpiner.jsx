import React from "react";

function MiniLoadingSpinner() {
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

export default MiniLoadingSpinner;
