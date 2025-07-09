import PopupOverlay from "../../../components/atoms/PopupOverlay";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";

describe("PopupOverlay", () => {
  // Pass the text to the button as a prop = children
  it("renders children", () => {
    render(
      <PopupOverlay>
        <div>Test Child</div>
      </PopupOverlay>
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
