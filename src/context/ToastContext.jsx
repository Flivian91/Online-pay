// context/ToastContext.js
"use client"
import ToastComponent from "@/components/ToastComponent";
import { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 5000) => {
    const id = Math.random().toString(36).substring(2, 9); // Unique ID for each toast
    setToasts((prev) => [
      ...prev,
      { id, message, type, duration }
    ]);
    
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastComponent toasts={toasts} />
    </ToastContext.Provider>
  );
};
