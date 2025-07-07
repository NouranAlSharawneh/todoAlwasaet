import React from "react";
import { useState } from "react";
import { categoryOptions, colorOptions } from "../../utils/options";
import { formSubmit } from "../../utils/utils";
import { BiSave } from "react-icons/bi";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import FormLabel from "../atoms/FormLabel";
import TaskInput from "../atoms/TaskInput";
import Colorpicker from "../atoms/Colorpicker";

function AddTaskForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("work");
  const [color, setColor] = useState("blue");

  const isTooLong = text.length > 30;

  const handleSubmit = (e) => {
    formSubmit(e, isTooLong, text, category, color, onSubmit, setText);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
      <div className="flex justify-between items-center gap-6 lg:gap-20">
        <div className="flex-1">
          <FormLabel>Category</FormLabel>
          <Select
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <FormLabel>Color</FormLabel>
          <Colorpicker
            colorOptions={colorOptions}
            color={color}
            setColor={setColor}
          />
        </div>
      </div>

      <div>
        <FormLabel htmlFor="task-input">Task</FormLabel>
        <TaskInput
          id="task-input"
          ariaLabel="Task"
          text={text}
          setText={setText}
          isTooLong={isTooLong}
        />
        <p
          className={`text-xs ${isTooLong ? "text-red-500" : "text-gray-400"}`}
        >
          {text.length}/30 characters
        </p>
      </div>

      <div className="flex justify-end">
        <Button type="secondary" disabled={isTooLong || text.trim() === ""}>
          <BiSave /> Add Task
        </Button>
      </div>
    </form>
  );
}

export default AddTaskForm;
