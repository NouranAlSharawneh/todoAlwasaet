import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import FormLabel from "../../../components/atoms/FormLabel";

describe("FormLabel", () => {
  // Testing the children prop
  it("renders children correctly", () => {
    render(<FormLabel>Test Label</FormLabel>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });
});
