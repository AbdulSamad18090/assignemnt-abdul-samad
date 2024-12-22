import React from "react";
import { IoClose } from "react-icons/io5";

const Alert = ({ message, type, onClose }) => {
  let alertClass = "";

  switch (type) {
    case "success":
      alertClass = "bg-green-100 border border-green-500 text-green-500 text-white";
      break;
    case "error":
      alertClass = "bg-red-100 border border-green-500 text-white";
      break;
    case "info":
      alertClass = "bg-blue-100 border border-green-500 text-white";
      break;
    default:
      alertClass = "bg-gray-100 border border-green-500 text-white";
  }

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg ${alertClass}`}
    >
      <div className="flex items-center justify-between gap-4 ">
        <div>{message}</div>
        <button
          onClick={onClose}
          className="bg-transparent text-green-500 font-bold text-xl"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Alert;
