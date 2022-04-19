import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StartAndStopButton from "src/components/StartAndStopButton";
import { useState } from "react";

const MockStartAndStopButton = () => {
  const [running, setRunning] = useState(false);
  return <StartAndStopButton running={running} setRunning={setRunning} />;
};

describe("Start/Stop Button", () => {
  it("should render stop button when start button is clicked once", () => {
    render(<MockStartAndStopButton />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    fireEvent.click(startOrStopButton);
    expect(startOrStopButton).toHaveTextContent("STOP");
  });

  it("should render start button when start button is clicked twice", () => {
    render(<MockStartAndStopButton />);

    const startOrStopButton = screen.getByRole("button", { name: "START" });
    fireEvent.click(startOrStopButton);
    fireEvent.click(startOrStopButton);
    expect(startOrStopButton).toHaveTextContent("START");
  });
});
