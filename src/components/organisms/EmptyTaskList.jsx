export default function EmptyTaskList() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 text-gray-500 h-[40vh] bg-gray-50 rounded-lg shadow-md mt-10">
      <div className="text-4xl mb-2">📝</div>
      <h2 className="text-base md:text-xl font-semibold">No tasks yet</h2>
      <p className="text-sm">start adding a new task using the above button</p>
    </div>
  );
}
