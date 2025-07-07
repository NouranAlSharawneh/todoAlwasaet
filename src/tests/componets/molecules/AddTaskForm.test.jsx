import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../../../components/molecules/AddTaskForm";
import { jest, describe, it, expect } from "@jest/globals";

describe("AddTaskForm", () => {
  // Testing if all the form fields are rendered
  it("renders all form fields", () => {
    render(<AddTaskForm onSubmit={jest.fn()} />);
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Task")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add task/i })
    ).toBeInTheDocument();
  });

  // Testing if the onSubmit function is called with the correct data when the form is submitted
  it("calls onSubmit with correct data when form is submitted", () => {
    const handleSubmit = jest.fn();
    render(<AddTaskForm onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText("Task"), {
      target: { value: "Test Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        text: "Test Task",
        category: expect.any(String),
        color: expect.any(String),
        status: false,
        id: expect.any(Number),
      })
    );
  });

  // Text input is empty or too long validation
  it("does not call onSubmit if task is empty or too long", () => {
    const handleSubmit = jest.fn();
    render(<AddTaskForm onSubmit={handleSubmit} />);
    // Try submitting empty field
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));
    expect(handleSubmit).not.toHaveBeenCalled();

    // Try submitting text that is too long
    fireEvent.change(screen.getByLabelText("Task"), {
      target: { value: "a".repeat(33) },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
