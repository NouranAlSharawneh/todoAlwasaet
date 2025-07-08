import React from "react";

function FormLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs md:text-sm text-gray-700 mb-1"
    >
      {children}
    </label>
  );
}

export default FormLabel;
