import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />);
    // Act
    //...
    // Assert
    const greetingElement = screen.getByText("Hello World!");
    expect(greetingElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });

    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders changed message if the button was clicked", async () => {
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    const buttonOutput = screen.getByText("Changed!");
    expect(buttonOutput).toBeInTheDocument();
  });

  test("does not render good to see you text if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
