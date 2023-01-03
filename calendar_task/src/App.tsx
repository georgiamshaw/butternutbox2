import { useState } from "react";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";
import { getEarliestDeliverableDate } from "./utils/dates";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState(
    getEarliestDeliverableDate()
  );

  return (
    <div className="App">
      <div>Choose your delivery day</div>
      <div>Delivery is always free</div>
      <ModalButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        confirmedDate={confirmedDate}
      />
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          confirmedDate={confirmedDate}
          setConfirmedDate={setConfirmedDate}
        />
      )}
    </div>
  );
};

export default App;
