import React, { useState } from "react";
import Button from "../atoms/Button";
import { IoAdd } from "react-icons/io5";
import FilterList from "../molecules/FilterList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TaskList from "../organisms/TaskList";

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

  return (
    <section className="mx-auto max-w-4xl pt-15 min-h-screen">
      <h1 className="text-5xl md:text-8xl text-center">Todo List</h1>

      <div className="px-4 pt-10 flex items-center justify-between">
        <Button onClick={() => setShowModal(true)}>
          <IoAdd /> Add new Todo
        </Button>
        <FilterList currentFilter={filter} onChangeFilter={setFilter} />
      </div>
      <TaskList tasks={getFilteredTasks()} setTasks={setTasks} />

      {showModal && (
        <div className="fixed inset-0 bg-gray-700/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4">Add New Todo</h2>
            {/* Add your form for adding a new todo here */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newTask = e.target.elements.task.value.trim();
                if (newTask) {
                  setTasks((prevTasks) => [
                    ...prevTasks,
                    { id: Date.now(), text: newTask, completed: false },
                  ]);
                  e.target.reset();
                  setShowModal(false);
                }
              }}
            >
              <input
                type="text"
                name="task"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
              />
              <div className="flex justify-end">
                <Button type="submit">Add Todo</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default MainLayout;
