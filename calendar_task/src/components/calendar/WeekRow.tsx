import DayCard from "./DayCard";
import { addDays } from "date-fns";

interface Props {
  startDate: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const WeekRow = ({ startDate, selectedDate, setSelectedDate }: Props) => {
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  return (
    <div className="weekRow">
      {days.map((day) => (
        <DayCard
          key={day.valueOf()}
          date={day}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </div>
  );
};

export default WeekRow;
