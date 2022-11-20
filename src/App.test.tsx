import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const p = screen.getByText(/lorem ipsum/i);
  expect(p).toBeInTheDocument();
});
