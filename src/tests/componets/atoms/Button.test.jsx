import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/atoms/Button";
import { jest, describe, it, expect } from "@jest/globals";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  it("applies primary class by default", () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-blue-500");
  });

  it("applies secondary class when type is 'secondary'", () => {
    render(<Button type="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-gray-300");
  });

  it("applies close class when type is 'close'", () => {
    render(<Button type="close">Close</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:text-red-500");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
