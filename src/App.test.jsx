import { render, screen } from "@testing-library/react";
import App from "./App";

test("button start with correct color", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", { name: /blue/i });
    expect(buttonElement).toHaveClass("red");
});
test("button has with correct color after click", () => {});
test("button has with correct text after click", () => {});
