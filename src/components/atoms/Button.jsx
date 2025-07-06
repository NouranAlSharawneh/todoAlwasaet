function Button({ children, type = "primary", onClick, disabled = false }) {
  return (
    <button
      className={`flex items-center rounded gap-2 text-xs md:text-sm transition-colors duration-300 cursor-pointer disabled:bg-gray-200 disabled:border disabled:cursor-not-allowed disabled:focus:outline-none disabled:hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 focus:outline-none focus:ring-1  ${
        type === "primary"
          ? "bg-blue-500 text-white hover:bg-blue-400 px-2 py-2 focus:ring-gray-500"
          : type === "secondary"
          ? "border border-gray-300 text-black hover:bg-gray-300/20 px-2 py-2 focus:ring-blue-500"
          : type === "close"
          ? " text-black hover:text-red-500 focus:ring-gray-500"
          : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
