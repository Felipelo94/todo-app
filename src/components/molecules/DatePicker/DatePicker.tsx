import React, { useState } from "react";
import styles from "./DatePicker.module.scss";
import Button from "../../atoms/Button/Button";

interface DatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value ? new Date(e.target.value) : null;
    onDateChange(dateValue);
    setShowPicker(false);
  };

  return (
    <div className={styles.datePicker}>
      <Button
        onClick={() => setShowPicker(!showPicker)}
        label={selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
      />

      {showPicker && (
        <input
          type="date"
          className={styles.dateInput}
          onChange={handleDateChange}
        />
      )}
    </div>
  );
};

export default DatePicker;
