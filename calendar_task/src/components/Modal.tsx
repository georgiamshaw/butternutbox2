import Buttons from "./Buttons";
import Calendar from "./calendar/Calendar";

import { FC, useState } from "react";

interface Props {
  setIsOpen: (arg: boolean) => void;
  confirmedDate: Date;
  setConfirmedDate: (date: Date) => void;
}

const Modal: FC<Props> = ({ setIsOpen, confirmedDate, setConfirmedDate }) => {
  const [selectedDate, setSelectedDate] = useState(confirmedDate);

  return (
    <div
     className="modalWrapper"
    >
      <div
        className="calendarWrapper"
      >
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Buttons
          setIsOpen={setIsOpen}
          setConfirmedDate={() => setConfirmedDate(selectedDate)}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
};

export default Modal;
