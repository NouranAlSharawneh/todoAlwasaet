import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const DraggableTrash = () => {
  return (
    <div className="absolute w-27 bg-red-400 h-full right-0 rounded z-0 top-0 bottom-0 flex items-center justify-center">
      <FaRegTrashCan className="text-white w-4 h-4 md:w-6 md:h-6" />
    </div>
  );
};

export default DraggableTrash;
