import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("should render text", () => {
  render(<App />);
  const text = screen.getByText("Hello World!");
  expect(text).toBeInTheDocument();
});
