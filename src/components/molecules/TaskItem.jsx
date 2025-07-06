import Checkmark from "../atoms/Checkmark";

function TaskItem({ task, setTasks }) {
  const { text, category, color, status, id } = task;

  const categoryIcons = {
    work: "💼",
    studying: "📚",
    chores: "🧹",
    other: "🔍",
  };

  const handleToggleStatus = () => {
    setTasks((prevTasks) => {
      const updated = prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      );
      const sorted = [...updated].sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status ? 1 : -1;
      });
      return sorted;
    });
  };

  const colorClasses = {
    blue: "border-l-blue-500",
    green: "border-l-green-500",
    red: "border-l-red-500",
    yellow: "border-l-yellow-500",
    purple: "border-l-purple-500",
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border rounded border-y-gray-200 border-r-gray-200 border-l-4 transition-colors duration-500 ${
        colorClasses[color]
      } bg-white shadow-xs hover:shadow-md transition-shadow duration-200 ${
        status ? "opacity-40 line-through" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="text-gray-500">{categoryIcons[category]}</span>
        <span className="text-gray-800 text-sm">{text}</span>
      </div>
      <div>
        <Checkmark checked={status} onChange={() => handleToggleStatus()} />
      </div>
    </div>
  );
}

export default TaskItem;
