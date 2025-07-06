import TaskItem from "../molecules/TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <div className="mt-4 flex flex-col gap-5">
      {tasks.length === 0 ? (
        <p className="text-gray-500 mt-10 text-xs md:text-lg text-center">
          No tasks yet
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  );
}

export default TaskList;
