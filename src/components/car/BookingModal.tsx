'use client';

import styles from './BookingModal.module.css';

export type BookingData = {
  name: string;
  email: string;
  date: string;      // уже отформатированная строка
  comment: string;
};

type Props = {
  data: BookingData;
  onClose: () => void;
};

export default function BookingModal({ data, onClose }: Props) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <h2 className={styles.title}>Booking Summary</h2>

        <div className={styles.block}>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Date:</strong> {data.date || '—'}
          </p>
          {data.comment && (
            <p>
              <strong>Comment:</strong> {data.comment}
            </p>
          )}
        </div>

        <button className={styles.button} type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
