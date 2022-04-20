import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "src/App";
import { act } from "react-dom/test-utils";

describe("App", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render next time every 0.01s", () => {
    render(<App />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    const minDivElement = screen.getByTestId("time-display-min");
    const secDivElement = screen.getByTestId("time-display-sec");
    const csDivElement = screen.getByTestId("time-display-cs");

    fireEvent.click(startOrStopButton);

    expect(minDivElement).toHaveTextContent("00");
    expect(secDivElement).toHaveTextContent("00");
    expect(csDivElement).toHaveTextContent("00");

    act(() => jest.advanceTimersByTime(10));

    expect(minDivElement).toHaveTextContent("00");
    expect(secDivElement).toHaveTextContent("00");
    expect(csDivElement).toHaveTextContent("01");

    act(() => jest.advanceTimersByTime(10));

    expect(minDivElement).toHaveTextContent("00");
    expect(secDivElement).toHaveTextContent("00");
    expect(csDivElement).toHaveTextContent("02");
  });

  it("should render '00:00.00' when clicked reset button while it is running", () => {
    render(<App />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    const resetButton = screen.getByRole("button", { name: "RESET" });
    const minDivElement = screen.getByTestId("time-display-min");
    const secDivElement = screen.getByTestId("time-display-sec");
    const csDivElement = screen.getByTestId("time-display-cs");

    fireEvent.click(startOrStopButton);

    act(() => jest.advanceTimersByTime(1000));

    fireEvent.click(resetButton);

    expect(minDivElement).toHaveTextContent("00");
    expect(secDivElement).toHaveTextContent("00");
    expect(csDivElement).toHaveTextContent("00");
  });

  it("should render '00:00.00' when clicked reset button while it is stopped", () => {
    render(<App />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    const resetButton = screen.getByRole("button", { name: "RESET" });
    const minDivElement = screen.getByTestId("time-display-min");
    const secDivElement = screen.getByTestId("time-display-sec");
    const csDivElement = screen.getByTestId("time-display-cs");

    fireEvent.click(startOrStopButton);

    act(() => jest.advanceTimersByTime(1000));

    fireEvent.click(startOrStopButton);
    fireEvent.click(resetButton);

    expect(minDivElement).toHaveTextContent("00");
    expect(secDivElement).toHaveTextContent("00");
    expect(csDivElement).toHaveTextContent("00");
  });

  it("should render start button when clicked reset button while it is running", () => {
    render(<App />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    const resetButton = screen.getByRole("button", { name: "RESET" });

    fireEvent.click(startOrStopButton);

    act(() => jest.advanceTimersByTime(1000));

    fireEvent.click(resetButton);

    expect(startOrStopButton).toHaveTextContent("START");
  });

  it("should render start button when clicked reset button while it is stopped", () => {
    render(<App />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    const resetButton = screen.getByRole("button", { name: "RESET" });

    fireEvent.click(startOrStopButton);

    act(() => jest.advanceTimersByTime(1000));

    fireEvent.click(startOrStopButton);
    fireEvent.click(resetButton);

    expect(startOrStopButton).toHaveTextContent("START");
  });
});
