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
    fireEvent.click(buttonElement)

    //check button text
    buttonElement.toHaveTextContent(/red/i)
    
    //check the button color
    expect(buttonElement).toHaveClass('blue')

});
test("button has with correct color after click", () => {
    

    

    // 
});

