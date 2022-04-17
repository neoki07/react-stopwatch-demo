import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "src/App";

describe("Dark/Light Button", () => {
  it("should render light button when dark button is clicked once", () => {
    render(<App />);
    const darkOrLightButton = screen.getByRole("button", { name: "DARK" });
    fireEvent.click(darkOrLightButton);
    expect(darkOrLightButton).toHaveTextContent("LIGHT");
  });

  it("should render dark button when dark button is clicked twice", () => {
    render(<App />);
    const darkOrLightButton = screen.getByRole("button", { name: "DARK" });
    fireEvent.click(darkOrLightButton);
    fireEvent.click(darkOrLightButton);
    expect(darkOrLightButton).toHaveTextContent("DARK");
  });
});

describe("Start/Stop Button", () => {
  it("should render stop button when start button is clicked once", () => {
    render(<App />);
    const startOrStopButton = screen.getByRole("button", { name: "START" });
    fireEvent.click(startOrStopButton);
    expect(startOrStopButton).toHaveTextContent("STOP");
  });

  it("should render start button when start button is clicked twice", () => {
    render(<App />);
    const startOrStopButton = screen.getByRole("button", { name: "START" });
    fireEvent.click(startOrStopButton);
    fireEvent.click(startOrStopButton);
    expect(startOrStopButton).toHaveTextContent("START");
  });
});
