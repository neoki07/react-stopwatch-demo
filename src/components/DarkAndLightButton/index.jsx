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
      className="w-24 h-24 mx-8 text-base font-bold text-gray-600 dark:text-gray-200 border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 active:translate-y-0.5"
      onClick={handleOnSwitchMode}
    >
      {isDarkMode ? "LIGHT" : "DARK"}
    </button>
  );
};

export default DarkAndLightButton;
