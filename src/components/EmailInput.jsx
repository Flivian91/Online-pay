import React from "react";

function EmailInput({ label = "", isDisabled = false, value = "" }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label.toLocaleLowerCase()}
        className={`text-sm font-bold tracking-wide cursor-pointer ${
          label.length === 0 ? " hidden" : ""
        }`}
      >
        {label}
      </label>
      <input
        type="email"
        id={label.toLocaleLowerCase()}
        disabled={isDisabled}
        defaultValue={value}
        className="w-full bg-gray-200/40  border border-gray-400 outline-none  rounded font-mono text-black text-lg px-2 py-1 caret-pink-400 disabled:cursor-not-allowed disabled:bg-text/30"
      />
    </div>
  );
}

export default EmailInput;
