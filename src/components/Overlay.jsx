import React from "react";

function Overlay({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-screen backdrop-blur-[2px] z-20 block lg:hidden"
    ></div>
  );
}

export default Overlay;
