import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/atoms/Button";
import { jest, describe, it, expect } from "@jest/globals";

describe("Button", () => {
  // Pass the text to the button as a prop = children
  it("renders children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  // Testing the primary class when no type is passed = primary
  it("applies primary class by default", () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-blue-500");
  });

  // Testing the secondary class when type is = secondary
  it("applies secondary class when type is 'secondary'", () => {
    render(<Button type="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("border-gray-300");
  });

  // Testing the close class when type is =close
  it("applies close class when type is 'close'", () => {
    render(<Button type="close">Close</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:text-red-500");
  });

  // Testing the onClick function when clicked
  it("calls onClick when clicked", () => {
    const handleClick = jest.fn(); // Mock the onClick function
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
