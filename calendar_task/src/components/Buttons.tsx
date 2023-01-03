interface Props {
  setIsOpen: (arg: boolean) => void;
  setConfirmedDate: (date: Date) => void;
  selectedDate: Date;
}

const Buttons = ({ setIsOpen, setConfirmedDate, selectedDate }: Props) => {
  const changeDeliveryDate = () => {
    setConfirmedDate(selectedDate);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="cancelButton"
        onClick={() => setIsOpen(false)}
      >
        CANCEL, DON'T CHANGE
      </button>
      <button
        className="changeButton"
        onClick={changeDeliveryDate}
      >
        CHANGE DATE
      </button>
    </>
  );
};

export default Buttons;
