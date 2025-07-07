import React from "react";
import { colorClasses } from "../../utils/options";
import TaskContent from "../atoms/TaskContent";
import TaskActions from "../atoms/TaskAction";

const DraggableTaskCard = ({
  task,
  isDragging,
  dragOffset,
  swipeHandlers,
  onToggleStatus,
}) => {
  const { text, category, color, status } = task;

  return (
    <div
      {...swipeHandlers}
      data-testid="task-item"
      className={`flex items-center justify-between p-4 border rounded border-y-gray-200 border-r-gray-200 border-l-4 transition-all duration-200 z-30 ${
        colorClasses[color]
      } bg-white shadow-xs hover:shadow-md ${
        status ? "bg-gray-500 line-through" : ""
      } ${isDragging ? "cursor-grabbing" : "cursor-grab"} relative`}
      style={{
        transform: `translateX(${dragOffset}px)`,
        transition: isDragging ? "none" : "transform 0.2s ease-out",
      }}
    >
      <TaskContent category={category} text={text} status={status} />
      <TaskActions status={status} onToggleStatus={onToggleStatus} />
    </div>
  );
};

export default DraggableTaskCard;
