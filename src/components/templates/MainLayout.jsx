import React, { useState } from "react";
import Button from "../atoms/Button";
import { IoAdd } from "react-icons/io5";
import FilterList from "../molecules/FilterList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TaskList from "../organisms/TaskList";
import AddTaskPopup from "../organisms/AddTaskPopup";

function MainLayout() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const getFilteredTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed);
      case "completed":
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowModal(false);
  };

  return (
    <section className="mx-auto max-w-4xl pt-15 min-h-screen px-4">
      <h1 className="text-5xl md:text-8xl text-center">Todo List</h1>

      <div className="px-4 pt-10 flex items-center justify-between">
        <Button onClick={() => setShowModal(true)}>
          <IoAdd /> Add new Todo
        </Button>
        <FilterList currentFilter={filter} onChangeFilter={setFilter} />
      </div>
      <TaskList tasks={getFilteredTasks()} setTasks={setTasks} />

      {showModal && (
        <AddTaskPopup
          onAdd={handleAddTask}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}

export default MainLayout;
