import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders random", () => {
  render(<App />);
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});
