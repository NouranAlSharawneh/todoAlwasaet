import React from "react";
import { afterEach, describe, expect, it, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AddTaskForm from "../../../components/molecules/AddTaskForm";

describe("AddTaskForm", () => {
  const handleSubmit = jest.fn();

  afterEach(() => {
    handleSubmit.mockClear();
  });

  // testing if all the form fields are rendered
  it("renders all form fields", () => {
    render(<AddTaskForm onSubmit={handleSubmit} />);
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Task")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  // testing if the onSubmit function is called with the correct data when the form is submitted
  it("calls onSubmit with correct data when form is submitted", () => {
    render(<AddTaskForm onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText("Task"), {
      target: { value: "Test Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
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

  // text input is empty or too long validation
  it("does not call onSubmit if task is empty or too long", () => {
    render(<AddTaskForm onSubmit={handleSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/task/i), {
      target: { value: "a".repeat(33) },
    });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
  });
});
