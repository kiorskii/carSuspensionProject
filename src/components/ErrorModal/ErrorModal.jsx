import React, { useEffect } from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Функция очистки
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>
            <h2>Ошибка</h2>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <img src="/assets/cross-icon.svg" alt="" />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.container}>
            <p>Среда с большой вязкостью.</p>
            <p>Среда с большой вязкостью. Возникает апериодическое движение.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
