import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "../../../components/organisms/TaskList";
import { jest, describe, it, expect } from "@jest/globals";

describe("TaskList", () => {
  // Testing the EmptyTaskList when tasks is empty
  it("renders EmptyTaskList when tasks is empty", () => {
    render(<TaskList tasks={[]} setTasks={jest.fn()} />);
    expect(screen.getByTestId("empty-task-list")).toBeInTheDocument();
  });

  // Testing the TaskItem for each task
  it("renders TaskItem for each task", () => {
    const tasks = [
      { id: 1, text: "Task 1", category: "work", color: "blue", status: false },
      {
        id: 2,
        text: "Task 2",
        category: "studying",
        color: "green",
        status: false,
      },
    ];
    render(<TaskList tasks={tasks} setTasks={jest.fn()} />);
    const items = screen.getAllByTestId("task-item");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Task 1");
    expect(items[1]).toHaveTextContent("Task 2");
  });
});
