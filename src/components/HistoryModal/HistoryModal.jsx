import React from 'react';
import styles from './HistoryModal.module.css';


const HistoryModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>
            <img className={styles.icons} src="/src/assets/history-icon.svg" alt="" />
            <h2>История</h2>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <img src="/src/assets/cross-icon.svg" alt="" />
          </button>
        </div>
        <div className={styles.modalBody}>
          {/* Содержимое модального окна */}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
