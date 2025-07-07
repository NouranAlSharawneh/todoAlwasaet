import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "../../../components/organisms/TaskList";
import { jest, describe, it, expect } from "@jest/globals";

describe("TaskList", () => {
  it("renders EmptyTaskList when tasks is empty", () => {
    render(<TaskList tasks={[]} setTasks={jest.fn()} />);
    expect(screen.getByTestId("empty-task-list")).toBeInTheDocument();
  });

  it("renders TaskItem for each task", () => {
    const tasks = [
      { id: 1, text: "Task 1" },
      { id: 2, text: "Task 2" },
    ];
    render(<TaskList tasks={tasks} setTasks={jest.fn()} />);
    const items = screen.getAllByTestId("task-item");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Task 1");
    expect(items[1]).toHaveTextContent("Task 2");
  });
});
