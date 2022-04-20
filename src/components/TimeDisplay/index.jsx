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

const TimeDisplay = (props) => {
  const { time } = props;

  return (
    <div className="my-6 flex font-roboto text-9xl text-gray-800 dark:text-gray-100">
      <div className="mx-3" data-testid="time-display-min">
        {getMinutesStr(time)}
      </div>
      <div className="-translate-y-2.5">:</div>
      <div className="mx-3" data-testid="time-display-sec">
        {getSecondsStr(time)}
      </div>
      <div>.</div>
      <div className="mx-3" data-testid="time-display-cs">
        {getCentiSecondsStr(time)}
      </div>
    </div>
  );
};

export default TimeDisplay;
