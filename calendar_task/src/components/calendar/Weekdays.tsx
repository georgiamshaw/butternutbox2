const days = ["M", "T", "W", "T", "F", "S", "S"];

const Weekdays = () => (
  <div className="weekRow">
    {days.map((day, i) => (
      <div
        key={`${day}_${i}`}
        className="day weekNames"
      >
        {day}
      </div>
    ))}
  </div>
);

export default Weekdays;
