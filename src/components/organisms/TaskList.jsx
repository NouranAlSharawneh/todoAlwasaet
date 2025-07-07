/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "../molecules/TaskItem";
import EmptyTaskList from "./EmptyTaskList";

function TaskList({ tasks, setTasks }) {
  return (
    <div className="mt-4 flex flex-col gap-5">
      {tasks.length === 0 ? (
        <EmptyTaskList />
      ) : (
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              layout
            >
              <TaskItem task={task} setTasks={setTasks} />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}

export default TaskList;
