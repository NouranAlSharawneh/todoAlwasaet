import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center">
      <img
        src="assets/listIcon.png"
        alt="Todo Alwasaet Logo"
        className="md:w-40 md:h-full w-20 h-full cursor-pointer hover:scale-105 hover:rotate-10 transition-transform duration-300"
      />
      <h1 className="text-5xl md:text-8xl text-center">Todo List</h1>
    </div>
  );
}

export default Header;
