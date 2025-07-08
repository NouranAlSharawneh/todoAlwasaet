import React from "react";

function Colorpicker({ colorOptions, color, setColor, id, ariaLabel }) {
  return (
    <div className="flex gap-2">
      {colorOptions.map((clr) => (
        <div
          id={id}
          aria-label={ariaLabel}
          key={clr}
          onClick={() => setColor(clr)}
          className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
            color === clr ? "border-gray-400" : "border-transparent"
          }`}
          style={{ backgroundColor: clr }}
        ></div>
      ))}
    </div>
  );
}

export default Colorpicker;
