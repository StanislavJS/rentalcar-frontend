'use client';

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingCalendar.module.css";

type Props = {
  value: Date | null;
  onChange: (date: Date | null) => void;
};

export default function BookingCalendar({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.input} onClick={() => setOpen(!open)}>
        {value ? value.toLocaleDateString("ru-RU") : "Booking date"}
      </div>

      {open && (
        <DatePicker
          selected={value}
          onChange={(date) => {
            onChange(date);
            setOpen(false);
          }}
          inline
          calendarClassName={styles.calendar}
        />
      )}
    </div>
  );
}
