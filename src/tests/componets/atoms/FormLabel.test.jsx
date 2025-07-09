import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import FormLabel from "../../../components/atoms/FormLabel";

describe("FormLabel", () => {
  // pass the text to the button as a prop = children
  it("renders children", () => {
    render(<FormLabel>Test Label</FormLabel>);
    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });
});
