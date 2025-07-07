export function sortTasks(tasks) {
  return [...tasks].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status ? 1 : -1;
  });
}

export function toggleTaskStatus(tasks, id) {
  const updated = tasks.map((task) =>
    task.id === id ? { ...task, status: !task.status } : task
  );
  return sortTasks(updated);
}

export function addNewTask(prevTasks, newTask) {
  const updated = [...prevTasks, newTask];
  return sortTasks(updated);
}

export function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

export function handleSubmit(
  e,
  isTooLong,
  text,
  category,
  color,
  onSubmit,
  setText
) {
  e.preventDefault();
  if (isTooLong || text.trim() === "") return;

  const newTask = {
    id: Date.now(),
    text,
    category,
    color,
    status: false,
  };

  onSubmit(newTask);
  setText("");
}
