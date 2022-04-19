import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DarkAndLightButton from "src/components/DarkAndLightButton";
import { useState } from "react";

const MockDarkAndLightButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkAndLightButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  );
};

describe("Dark/Light Button", () => {
  it("should render light button when dark button is clicked once", () => {
    render(<MockDarkAndLightButton />);

    const darkOrLightButton = screen.getByRole("button", { name: "DARK" });
    fireEvent.click(darkOrLightButton);
    expect(darkOrLightButton).toHaveTextContent("LIGHT");
  });

  it("should render dark button when dark button is clicked twice", () => {
    render(<MockDarkAndLightButton />);

    const darkOrLightButton = screen.getByRole("button", { name: "DARK" });
    fireEvent.click(darkOrLightButton);
    fireEvent.click(darkOrLightButton);
    expect(darkOrLightButton).toHaveTextContent("DARK");
  });
});
