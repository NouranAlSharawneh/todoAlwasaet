import React from "react";

function TaskItem({ task }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <span className="text-gray-800">{task.text}</span>
      <span className="text-gray-500">{task.dueDate}</span>
    </div>
  );
}

export default TaskItem;
