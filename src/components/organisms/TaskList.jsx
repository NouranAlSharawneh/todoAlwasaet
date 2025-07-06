import TaskItem from "../molecules/TaskItem";
import EmptyTaskList from "./EmptyTaskList";

function TaskList({ tasks, setTasks }) {
  return (
    <div className="mt-4 flex flex-col gap-5">
      {tasks.length === 0 ? (
        <EmptyTaskList />
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  );
}

export default TaskList;
