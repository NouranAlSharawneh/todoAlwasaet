import { IoIosClose } from "react-icons/io";
import PopupOverlay from "../atoms/PopupOverlay";
import AddTaskForm from "../molecules/AddTaskForm";
import Button from "../atoms/Button";

function AddTaskModal({ onAdd, onClose }) {
  return (
    <PopupOverlay>
      <div className="bg-white p-4 md:p-8 rounded shadow w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl ">Add New Task</h2>
          <Button type="close" onClick={onClose}>
            <IoIosClose size={30} />
          </Button>
        </div>
        <AddTaskForm onSubmit={onAdd} />
      </div>
    </PopupOverlay>
  );
}

export default AddTaskModal;
