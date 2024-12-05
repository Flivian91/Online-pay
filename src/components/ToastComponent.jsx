// components/ToastComponent.js

import React from "react";
import { FaTimes } from "react-icons/fa"; // Optional for close button

const ToastComponent = ({ toasts }) => {
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`bg-${toast.type}-500 text-white px-4 py-3 bg-green-600 rounded-md shadow-md flex gap-3 items-center justify-between max-w-sm transition-all duration-300 ease-in-out`}
        >
          <div className="h-4 w-4 rounded-full border-2 border-t-0 bg-transparent animate-spin border-white"></div>
          <span>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-4 text-white focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastComponent;
