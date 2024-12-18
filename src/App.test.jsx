import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
    // render App
    render(<App />);

    // find the button
    const buttonElement = screen.getByRole("button", { name: /blue/i });

    // check initial color
    expect(buttonElement).toHaveClass("red");

    //click the button
    fireEvent.click(buttonElement);

    //check button text
    expect(buttonElement).toHaveTextContent(/red/i);

    //check the button color
    expect(buttonElement).toHaveClass("blue");
});

test("button & checkbox flow", () => {
    //render App
    render(<App />);

    //find the button & checkbox
    const buttonElement = screen.getByRole("button", { name: /blue/i });
    const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });
    
    //check initial conditions
    expect(buttonElement).toBeEnabled()
    expect(checkboxElement).not.toBeChecked()
});
