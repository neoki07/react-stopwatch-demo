import { useCallback } from "react";

const ResetButton = (props) => {
  const { setRunning, setTime } = props;

  const handleOnReset = useCallback(() => {
    setRunning(false);
    setTime(0);
  }, [setRunning, setTime]);

  return (
    <button
      className="mx-8 h-24 w-24 rounded-full border-2 border-gray-400 bg-gray-100 text-base font-bold text-gray-600 hover:bg-gray-200 active:translate-y-0.5 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      onClick={handleOnReset}
    >
      RESET
    </button>
  );
};

export default ResetButton;
