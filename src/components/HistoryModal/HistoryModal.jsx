import React, { useEffect } from "react";
import styles from "./HistoryModal.module.css";
import { useSuspensionData } from "../SuspensionContext/SuspensionContext";
import OscillationChart from "../OscillationChart/OscillationChart";

const HistoryModal = ({ onClose }) => {
  const { history } = useSuspensionData();

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
            <img
              className={styles.icons}
              src="/assets/history-icon.svg"
              alt=""
            />
            <h2>История</h2>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <img src="/assets/cross-icon.svg" alt="" />
          </button>
        </div>
        <div className={styles.modalBody}>
          <ol className={styles.historyList}>
            {history.length === 0 && (
              <div className={styles.emptyBlock}>
                <div>Тут пусто...</div>
                <div>Вы еще не рассчитали ни одной модели.</div>
              </div>
            )}
            {history.map((item, index) => (
              <li key={index} className={styles.el}>
                <h2 className={styles.itemTitle}>
                  График колебаний автомобильной подвески
                </h2>
                <div className={styles.itemInfo}>
                  <OscillationChart
                    deformation={parseFloat(history[index].springDeformation)}
                    velocity={parseFloat(history[index].speed)}
                    time={parseFloat(history[index].time)}
                    stiffness={parseFloat(history[index].springStiffness)}
                    viscosity={parseFloat(history[index].mediumViscosity)}
                    mass={parseFloat(history[history.length - 1].objectMass)}
                  />
                  <div className={styles.itemInfoContainer}>
                    <h3 className="itemPreTitle">Параметры</h3>
                    <ul className={styles.paramsList}>
                      <li className={styles.paramsItem}>
                        <p className={styles.paramsLabel}>
                          Деформация пружины (l0), м
                        </p>
                        <p className={styles.paramsValue}>
                          {history[index].springDeformation}
                        </p>
                      </li>
                      <li className={styles.paramsItem}>
                        <p className={styles.paramsLabel}>
                          Начальная скорость (v0), м/с
                        </p>
                        <p className={styles.paramsValue}>
                          {history[index].speed}
                        </p>
                      </li>
                      <li className={styles.paramsItem}>
                        <p className={styles.paramsLabel}>Время, c</p>
                        <p className={styles.paramsValue}>
                          {history[index].time}
                        </p>
                      </li>
                      <li className={styles.paramsItem}>
                        <p className={styles.paramsLabel}>
                          Жесткость пружины (с)
                        </p>
                        <p className={styles.paramsValue}>
                          {history[index].springStiffness}
                        </p>
                      </li>
                      <li className={styles.paramsItem}>
                        <p className={styles.paramsLabel}>Вязкость среды (μ)</p>
                        <p className={styles.paramsValue}>
                          {history[index].mediumViscosity}
                        </p>
                      </li>
                      <li className={styles.paramsItem}>
                        <p className={styles.paramsLabel}>
                          Масса объекта (М), т
                        </p>
                        <p className={styles.paramsValue}>
                          {history[index].objectMass}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
