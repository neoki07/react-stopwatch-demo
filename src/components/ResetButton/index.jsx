import { useCallback } from "react";

const ResetButton = (props) => {
  const { setRunning, setTime } = props;

  const handleOnReset = useCallback(() => {
    setRunning(false);
    setTime(0);
  }, [setRunning, setTime]);

  return (
    <button
      className="w-24 h-24 mx-8 text-base font-bold text-gray-600 dark:text-gray-200 border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 active:translate-y-0.5"
      onClick={handleOnReset}
    >
      RESET
    </button>
  );
};

export default ResetButton;
