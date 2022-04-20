import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

import StartAndStopButton from "src/components/StartAndStopButton";

const MockStartAndStopButton = () => {
  const [running, setRunning] = useState(false);
  return <StartAndStopButton running={running} setRunning={setRunning} />;
};

describe("Start/Stop Button", () => {
  it("should render stop button when start button is clicked once", () => {
    render(<MockStartAndStopButton />);

    const startAndStopButton = screen.getByRole("button", { name: "START" });
    fireEvent.click(startAndStopButton);
    expect(startAndStopButton).toHaveTextContent("STOP");
  });

  it("should render start button when start button is clicked twice", () => {
    render(<MockStartAndStopButton />);

    const startAndStopButton = screen.getByRole("button", { name: "START" });
    fireEvent.click(startAndStopButton);
    fireEvent.click(startAndStopButton);
    expect(startAndStopButton).toHaveTextContent("START");
  });
});
