import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const useTaskDrag = (onSwipedLeft) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft,
    onSwiping: (eventData) => {
      if (eventData.dir === "Left") {
        const offset = Math.min(Math.abs(eventData.deltaX), 100);
        setDragOffset(-offset);
        setIsDragging(true);
      }
    },
    onSwipeStart: () => {
      setIsDragging(true);
    },
    onTouchEndOrOnMouseUp: () => {
      setIsDragging(false);
      setDragOffset(0);
    },
    delta: 10,
    trackMouse: true,
  });

  return { isDragging, dragOffset, swipeHandlers };
};
