import React from "react";
import { categoryIcons } from "../../utils/options";

const TaskContent = ({ category, text, status }) => {
  return (
    <div className="flex items-center gap-4">
      <span className={`${status ? "opacity-50" : "opacity-100"}`}>
        {categoryIcons[category]}
      </span>
      <span className={`${status ? "text-gray-400" : "text-gray-800"} text-sm`}>
        {text}
      </span>
    </div>
  );
};

export default TaskContent;
