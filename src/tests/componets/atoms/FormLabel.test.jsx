import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import FormLabel from "../../../components/atoms/FormLabel";

describe("FormLabel", () => {
  it("renders children correctly", () => {
    render(<FormLabel>Test Label</FormLabel>);
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe("LABEL");
  });

  it("applies the correct className", () => {
    render(<FormLabel>Label</FormLabel>);
    const label = screen.getByText("Label");
    expect(label).toHaveClass("block text-xs md:text-sm text-gray-700 mb-1");
  });
});
