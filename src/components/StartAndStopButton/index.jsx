import { useCallback } from "react";

const StartAndStopButton = (props) => {
  const { running, setRunning } = props;

  const handleOnStart = useCallback(() => {
    setRunning(!running);
  }, [running, setRunning]);

  return (
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
  );
};

export default StartAndStopButton;
