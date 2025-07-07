import React, { useState } from "react";
import { toggleTaskStatus, deleteTask } from "../../utils/utils";
import DraggableTrash from "../atoms/DraggableTrash";
import DraggableTaskCard from "./DraggableTaskCard";
import DeleteConfirmDialog from "../organisms/DeleteConfirmDialog";
import { useTaskDrag } from "../../hooks/useTaskDrag";

function TaskItem({ task, setTasks }) {
  const { id } = task;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggleStatus = () => {
    setTasks((prevTasks) => toggleTaskStatus(prevTasks, id));
  };

  const handleDelete = () => {
    setTasks((prevTasks) => deleteTask(prevTasks, id));
    setShowConfirm(false);
  };

  const { isDragging, dragOffset, swipeHandlers } = useTaskDrag(() =>
    setShowConfirm(true)
  );

  return (
    <>
      <div className="relative">
        <DraggableTrash />
        <DraggableTaskCard
          task={task}
          isDragging={isDragging}
          dragOffset={dragOffset}
          swipeHandlers={swipeHandlers}
          onToggleStatus={handleToggleStatus}
        />
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
