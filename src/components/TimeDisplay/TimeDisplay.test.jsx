import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import TimeDisplay from "src/components/TimeDisplay";

describe("Time Display", () => {
  it("should render '00:00.00' when 'time' === 0", () => {
    render(<TimeDisplay time={0} />);

    const minDivElement = screen.getByTestId("time-display-min");
    const secDivElement = screen.getByTestId("time-display-sec");
    const csDivElement = screen.getByTestId("time-display-cs");

    expect(minDivElement).toHaveTextContent("00");
    expect(secDivElement).toHaveTextContent("00");
    expect(csDivElement).toHaveTextContent("00");
  });

  it("should render '99:59.99' when 'time' === 5999.99", () => {
    render(<TimeDisplay time={5999.99} />);

    const minDivElement = screen.getByTestId("time-display-min");
    const secDivElement = screen.getByTestId("time-display-sec");
    const csDivElement = screen.getByTestId("time-display-cs");

    expect(minDivElement).toHaveTextContent("99");
    expect(secDivElement).toHaveTextContent("59");
    expect(csDivElement).toHaveTextContent("99");
  });
});
