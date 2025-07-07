import React from "react";
import PopupOverlay from "../atoms/PopupOverlay";
import Button from "../atoms/Button";

function DeleteConfirmDialog({
  onCancel,
  onDelete,
  message = "Are you sure you want to delete this task?",
}) {
  return (
    <PopupOverlay>
      <div className="bg-white p-6 rounded shadow w-full max-w-xs mx-auto flex flex-col items-center">
        <p className="mb-6 text-center text-xs md:text-sm">{message}</p>
        <div className="flex gap-4">
          <Button type="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="close" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </PopupOverlay>
  );
}

export default DeleteConfirmDialog;
