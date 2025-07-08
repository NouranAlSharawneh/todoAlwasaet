import React from "react";

function PopupOverlay({ children }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4 md:px-0">
      {children}
    </div>
  );
}

export default PopupOverlay;
