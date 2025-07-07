import React from "react";
import Checkmark from "../atoms/Checkmark";

const TaskActions = ({ status, onToggleStatus }) => {
  return (
    <div className={`${status ? "opacity-50" : "opacity-100"}`}>
      <Checkmark checked={status} onChange={onToggleStatus} />
    </div>
  );
};

export default TaskActions;
