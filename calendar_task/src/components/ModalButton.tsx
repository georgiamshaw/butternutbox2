import { format } from "date-fns";
import calendarIcon from "./calendar.svg";
import vanIcon from "./van.svg";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  confirmedDate: Date;
}

const ModalButton = ({ isOpen, setIsOpen, confirmedDate }: Props) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <div
        className="buttonWrapper"
      >
        <div
         className="dateWrapper"
        >
          <div>{format(confirmedDate, "EEEE MMMM d")}</div>
          <div className="vanIconWrapper">
            <img src={vanIcon} alt="van" />
            <p>Earliest delivery</p>
          </div>
        </div>
        <div>
          <div
           className="iconDateWrapper"
          >
            <span
              className="iconDate"
            >
              {format(confirmedDate, "dd")}
            </span>
            <img src={calendarIcon} alt="calendar" />
          </div>
          <p>Change</p>
        </div>
      </div>
    </button>
  );
};

export default ModalButton;
