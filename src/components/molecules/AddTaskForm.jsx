import { useState } from "react";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import FormLabel from "../atoms/FormLabel";
import { BiSave } from "react-icons/bi";

const categoryOptions = [
  { value: "work", label: "Work" },
  { value: "studying", label: "Studying" },
  { value: "chores", label: "Chores" },
  { value: "other", label: "Other" },
];

const colorOptions = ["blue", "green", "red", "yellow", "purple"];

function AddTaskForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("work");
  const [color, setColor] = useState("blue");

  const isTooLong = text.length > 25;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTooLong || text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text,
      category,
      color,
      completed: false,
    };

    onSubmit(newTask);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
      <div className="flex justify-between items-center">
        {/* Category Dropdown */}
        <div>
          <FormLabel>Category</FormLabel>
          <Select
            options={categoryOptions}
            value={category}
            onChange={setCategory}
          />
        </div>

        {/* Color Picker */}
        <div>
          <FormLabel>Color</FormLabel>
          <div className="flex gap-2">
            {colorOptions.map((clr) => (
              <div
                key={clr}
                onClick={() => setColor(clr)}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                  color === clr ? "border-gray-400" : "border-transparent"
                }`}
                style={{ backgroundColor: clr }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Task Text */}
      <div>
        <FormLabel>Task</FormLabel>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your task..."
          className={`w-full p-2 rounded border placeholder:text-xs ${
            isTooLong ? "border-red-500" : "border-gray-300"
          } focus:outline-none`}
          rows={2}
          maxLength={100}
        />
        <p
          className={`text-xs ${isTooLong ? "text-red-500" : "text-gray-400"}`}
        >
          {text.length}/25 characters
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="secondary" disabled={isTooLong || text.trim() === ""}>
          <BiSave /> Add Task
        </Button>
      </div>
    </form>
  );
}

export default AddTaskForm;
