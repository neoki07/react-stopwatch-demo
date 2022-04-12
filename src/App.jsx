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
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useInterval(() => {
    if (playing) {
      const newTime = time + 0.01;
      setTime(newTime);
    }
  }, 10);

  const handleOnStart = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  const handleOnReset = useCallback(() => {
    setPlaying(false);
    setTime(0);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0 5px", fontSize: "50px" }}>
          {getMinutesStr(time)}
        </div>
        <div style={{ margin: "0 5px", fontSize: "50px" }}>:</div>
        <div style={{ margin: "0 5px", fontSize: "50px" }}>
          {getSecondsStr(time)}
        </div>
        <div style={{ margin: "0 5px", fontSize: "50px" }}>.</div>
        <div style={{ margin: "0 5px", fontSize: "50px" }}>
          {getCentiSecondsStr(time)}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <ActionIcon
          variant="outline"
          size={60}
          radius={"50%"}
          style={{
            margin: "0 10px",
          }}
        >
          DUMMY
        </ActionIcon>
        <ActionIcon
          variant="outline"
          size={80}
          radius={"50%"}
          style={{
            margin: "0 10px",
          }}
          onClick={handleOnStart}
        >
          {playing ? "STOP" : "START"}
        </ActionIcon>
        <ActionIcon
          variant="outline"
          size={60}
          radius={"50%"}
          style={{
            margin: "0 10px",
          }}
          onClick={handleOnReset}
        >
          RESET
        </ActionIcon>
      </div>
    </div>
  );
};

export default App;
