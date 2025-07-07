import React from "react";

function Select({ options, value, onChange, className }) {
  return (
    <select
      className={`h-8.5 border px-2 py-2 rounded bg-white text-xs md:text-sm text-gray-800 border-gray-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
