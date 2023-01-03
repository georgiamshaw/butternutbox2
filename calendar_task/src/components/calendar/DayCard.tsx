import { format, isSameDay, isSameMonth } from "date-fns";
import {
  getEarliestDeliverableDate,
  isDeliverableDate,
} from "../../utils/dates";

interface Props {
  date: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const DayCard = ({ date, selectedDate, setSelectedDate }: Props) => {
  const isSelectedDate = isSameDay(date, selectedDate);
  const isInThisMonth = isSameMonth(date, getEarliestDeliverableDate());
  const isDeliverable = isInThisMonth && isDeliverableDate(date);

  const onClick = () => {
    if (isDeliverable) {
      setSelectedDate(date);
    }
  };

  return (
    <div
      className={`day ${isSelectedDate ? "selectedDay" : ""} ${
        isSameDay(date, new Date()) ? "today" : ""
      } ${isDeliverable ? "activeDay" : "inactiveDay"}`}
      onClick={onClick}
    >
      {format(date, "d")}
    </div>
  );
};

export default DayCard;
