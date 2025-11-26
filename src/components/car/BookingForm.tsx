'use client';

import { useState } from "react";
import styles from "./BookingForm.module.css";
import BookingCalendar from "../catalog/BookingCalendar";
import BookingModal, { BookingData } from "./BookingModal";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: null as Date | null,
    comment: "",
  });

  const [modalData, setModalData] = useState<BookingData | null>(null);

  const formatDate = (d: Date | null): string => {
    if (!d) return "";
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yy = String(d.getFullYear()).slice(2);
    return `${dd}.${mm}.${yy}`; // dd.mm.yy
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: BookingData = {
      name: form.name.trim(),
      email: form.email.trim(),
      date: formatDate(form.date),
      comment: form.comment.trim(),
    };

    setModalData(data);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Book your car now</h2>
        <p className={styles.subtitle}>
          Stay connected! We are always ready to help you.
        </p>

        <input
          className={styles.input}
          type="text"
          placeholder="Name*"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Email*"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* КРАСИВЫЙ КАЛЕНДАРЬ */}
        <BookingCalendar
          value={form.date}
          onChange={(date) => setForm({ ...form, date })}
        />

        <textarea
          className={styles.textarea}
          placeholder="Comment"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />

        <button className={styles.button} type="submit">
          Send
        </button>
      </form>

      {modalData && (
        <BookingModal
          data={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </>
  );
}
