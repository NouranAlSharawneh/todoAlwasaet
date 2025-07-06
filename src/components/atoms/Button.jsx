import React from "react";

function Button({ children, type = "primary", onClick }) {
  return (
    <button
      className={`px-2 py-2 flex items-center rounded gap-2 text-xs md:text-sm transition-colors duration-200 ${
        type === "primary"
          ? "bg-blue-500 text-white hover:bg-blue-400"
          : "bg-gray-300 text-black"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
