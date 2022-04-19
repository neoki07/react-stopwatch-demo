import { useCallback, useEffect } from "react";

const DarkAndLightButton = (props) => {
  const { isDarkMode, setIsDarkMode } = props;

  const handleOnSwitchMode = useCallback(() => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }, [setIsDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      className="mx-8 h-24 w-24 rounded-full border-2 border-gray-400 bg-gray-100 text-base font-bold text-gray-600 hover:bg-gray-200 active:translate-y-0.5 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      onClick={handleOnSwitchMode}
    >
      {isDarkMode ? "LIGHT" : "DARK"}
    </button>
  );
};

export default DarkAndLightButton;
