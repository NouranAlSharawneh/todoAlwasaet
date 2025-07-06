import TaskItem from "../molecules/TaskItem";

function TaskList({ tasks, setTasks }) {
  // const toggleTask = (id) => {
  //   const updated = tasks.map((task) =>
  //     task.id === id ? { ...task, completed: !task.completed } : task
  //   );
  //   setTasks(updated);
  // };

  // const deleteTask = (id) => {
  //   const updated = tasks.filter((task) => task.id !== id);
  //   setTasks(updated);
  // };

  return (
    <div className="mt-4 flex flex-col gap-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 mt-10 text-xs md:text-lg text-center">
          No tasks yet
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            // onToggle={toggleTask}
            // onDelete={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
