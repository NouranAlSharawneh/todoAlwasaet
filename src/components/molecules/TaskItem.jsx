import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { toggleTaskStatus, deleteTask } from "../../utils/utils";
import { categoryIcons, colorClasses } from "../../utils/options";
import Checkmark from "../atoms/Checkmark";
import DeleteConfirmDialog from "../organisms/DeleteConfirmDialog";

function TaskItem({ task, setTasks }) {
  const { text, category, color, status, id } = task;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggleStatus = () => {
    setTasks((prevTasks) => toggleTaskStatus(prevTasks, id));
  };

  const handleDelete = () => {
    setTasks((prevTasks) => deleteTask(prevTasks, id));
    setShowConfirm(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setShowConfirm(true),
    delta: 50,
    trackMouse: true,
  });

  return (
    <>
      <div
        {...swipeHandlers}
        data-testid="task-item"
        className={`flex items-center justify-between p-4 border rounded border-y-gray-200 border-r-gray-200 border-l-4 transition-colors duration-500 ${
          colorClasses[color]
        } bg-white shadow-xs hover:shadow-md transition-shadow duration-200 ${
          status ? "opacity-60 line-through" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="text-gray-500">{categoryIcons[category]}</span>
          <span className="text-gray-800 text-sm">{text}</span>
        </div>
        <div>
          <Checkmark checked={status} onChange={() => handleToggleStatus()} />
        </div>
      </div>
      {showConfirm && (
        <DeleteConfirmDialog
          onCancel={() => setShowConfirm(false)}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default TaskItem;
