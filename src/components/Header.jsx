import React from "react";

function Header() {
  return (
    <div className="grid grid-cols-[0.1fr_1fr_0.5fr_1fr] md:px-2 text-lg gap-2 tracking-wide font-bold py-2 border-b border-stone-300">
      <span>#</span>
      <span>Email</span>
      <span>Status</span>
      <span className="text-center">Actions</span>
    </div>
  );
}

export default Header;
