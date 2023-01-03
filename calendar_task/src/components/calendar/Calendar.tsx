import Headings from "./Headings";
import Weekdays from "./Weekdays";
import Dates from "./Dates";

interface Props {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const Calendar = ({ selectedDate, setSelectedDate }: Props) => (
  <div className="calendar">
    <Headings />
    <Weekdays />
    <Dates selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
  </div>
);

export default Calendar;
