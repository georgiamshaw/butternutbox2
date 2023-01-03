import { format } from "date-fns";
import { getEarliestDeliverableDate } from "../../utils/dates";

const Headings = () => (
  <div
    className="headings"
  >
    <h2 className="currentMonth">
      {format(getEarliestDeliverableDate(), "MMMM yyyy")}
    </h2>
  </div>
);

export default Headings;
