import "@testing-library/jest-dom";
import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TaskList from "../../../components/organisms/TaskList";
import { jest, describe, it, expect, afterEach } from "@jest/globals";

describe("TaskList", () => {
  const handleSetTasksFn = jest.fn();

  afterEach(() => {
    handleSetTasksFn.mockClear();
  });

  const tasks = [
    { id: 1, text: "Task 1", category: "work", color: "blue", status: false },
    {
      id: 2,
      text: "Task 2",
      category: "studying",
      color: "green",
      status: true,
    },
  ];

  // testing the EmptyTaskList when tasks is empty
  it("renders EmptyTaskList when tasks is empty", () => {
    render(<TaskList tasks={[]} setTasks={handleSetTasksFn} />);
    expect(screen.getByText(/no tasks/i)).toBeInTheDocument();
  });

  // testing the TaskItem for each task
  it("renders TaskItem for each task", () => {
    render(<TaskList tasks={tasks} setTasks={handleSetTasksFn} />);
    const items = screen.getAllByTestId("task-item");
    expect(items).toHaveLength(2);

    tasks.forEach((task, index) => {
      expect(items[index]).toHaveTextContent(task.text);
    });
  });

  // testing the TaskItem checkbox, starting with unchecked
  it("renders TaskItem checkbox unchecked by default", () => {
    render(<TaskList tasks={tasks} setTasks={handleSetTasksFn} />);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).not.toBeChecked();
  });

  // testing the TaskItem checkbox, checking it
  it("checks TaskItem checkbox when clicked", () => {
    function Wrapper() {
      const [localTasks, setLocalTasks] = useState(tasks);
      return <TaskList tasks={localTasks} setTasks={setLocalTasks} />;
    }
    render(<Wrapper />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();
  });
});
