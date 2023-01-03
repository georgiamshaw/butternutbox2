import WeekRow from "./WeekRow";
import { getFirstDaysOfWeeks } from "../../utils/dates";

interface Props {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const Dates = ({ selectedDate, setSelectedDate }: Props) => {
  const firstDaysOfWeeks = getFirstDaysOfWeeks();

  return (
    <div>
      {firstDaysOfWeeks.map((date) => (
        <WeekRow
          key={date.valueOf()}
          startDate={date}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </div>
  );
};

export default Dates;
