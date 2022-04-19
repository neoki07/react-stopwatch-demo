import { useCallback } from "react";

const StartAndStopButton = (props) => {
  const { running, setRunning } = props;

  const handleOnStart = useCallback(() => {
    setRunning(!running);
  }, [running, setRunning]);

  return (
    <button
      className={`mx-8 h-32 w-32 rounded-full border-2 text-2xl font-semibold text-white active:translate-y-0.5 ${
        running
          ? "border-rose-700 bg-rose-500 hover:bg-rose-600"
          : "border-sky-700 bg-sky-500 hover:bg-sky-600"
      } `}
      onClick={handleOnStart}
    >
      {running ? "STOP" : "START"}
    </button>
  );
};

export default StartAndStopButton;
