import React from "react";

function TaskInput({ text, setText, isTooLong, id, ariaLabel }) {
  return (
    <textarea
      id={id}
      aria-label={ariaLabel}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Write your task..."
      className={`w-full p-2 text-sm rounded border placeholder:text-xs ${
        isTooLong ? "border-red-500" : "border-gray-300"
      } focus:outline-none`}
      rows={2}
      maxLength={100}
    />
  );
}

export default TaskInput;
