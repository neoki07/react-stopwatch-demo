import { useInterval } from "use-interval";
import { useCallback, useEffect, useState } from "react";

const getMinutesStr = (time) => {
  return Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
};

const getSecondsStr = (time) => {
  return Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
};

const getCentiSecondsStr = (time) => {
  return time.toFixed(2).split(".")[1];
};

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useInterval(() => {
    if (running) {
      setTime((t) => t + 0.01);
    }
  }, 10);

  const handleOnSwitchMode = useCallback(() => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleOnStart = useCallback(() => {
    setRunning(!running);
  }, [running]);

  const handleOnReset = useCallback(() => {
    setRunning(false);
    setTime(0);
  }, []);

  return (
    <div className="antialiased h-screen flex flex-col justify-center items-center dark:bg-gray-900">
      <div className="my-6 flex font-roboto text-9xl text-gray-800 dark:text-gray-100">
        <div className="mx-3">{getMinutesStr(time)}</div>
        <div className="-translate-y-2.5">:</div>
        <div className="mx-3">{getSecondsStr(time)}</div>
        <div>.</div>
        <div className="mx-3">{getCentiSecondsStr(time)}</div>
      </div>
      <div className="my-6 flex items-center">
        <button
          className="w-24 h-24 mx-8 text-base font-bold text-gray-600 dark:text-gray-200 border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 active:translate-y-0.5"
          onClick={handleOnSwitchMode}
        >
          {isDarkMode ? "LIGHT" : "DARK"}
        </button>
        <button
          className={`w-32 h-32 mx-8 text-2xl font-semibold text-white border-2 rounded-full ${
            running
              ? "border-rose-700 bg-rose-500 hover:bg-rose-600"
              : "border-sky-700 bg-sky-500 hover:bg-sky-600"
          } active:translate-y-0.5`}
          onClick={handleOnStart}
        >
          {running ? "STOP" : "START"}
        </button>
        <button
          className="w-24 h-24 mx-8 text-base font-bold text-gray-600 dark:text-gray-200 border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 active:translate-y-0.5"
          onClick={handleOnReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default App;
