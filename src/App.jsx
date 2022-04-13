import { ActionIcon } from "@mantine/core";
import { useInterval } from "use-interval";
import { useCallback, useState } from "react";

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

  useInterval(() => {
    if (running) {
      setTime((t) => t + 0.01);
    }
  }, 10);

  const handleOnStart = useCallback(() => {
    setRunning(!running);
  }, [running]);

  const handleOnReset = useCallback(() => {
    setRunning(false);
    setTime(0);
  }, []);

  return (
    <div className="antialiased h-screen flex flex-col justify-center items-center">
      <div className="my-6 flex font-roboto text-9xl text-gray-800">
        <div className="mx-3">{getMinutesStr(time)}</div>
        <div className="-translate-y-2.5">:</div>
        <div className="mx-3">{getSecondsStr(time)}</div>
        <div>.</div>
        <div className="mx-3">{getCentiSecondsStr(time)}</div>
      </div>
      <div className="my-6 flex items-end">
        <ActionIcon className="mx-8" variant="outline" size={90} radius={"50%"}>
          DUMMY
        </ActionIcon>
        <ActionIcon
          className="mx-8"
          variant="outline"
          size={120}
          radius={"50%"}
          onClick={handleOnStart}
        >
          {running ? "STOP" : "START"}
        </ActionIcon>
        <ActionIcon
          className="mx-8"
          variant="outline"
          size={90}
          radius={"50%"}
          onClick={handleOnReset}
        >
          RESET
        </ActionIcon>
      </div>
    </div>
  );
};

export default App;
