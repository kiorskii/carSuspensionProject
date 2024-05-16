import React, { useState } from "react";
import HelpModal from "../HelpModal/HelpModal";
import HistoryModal from "../HistoryModal/HistoryModal";
import styles from "./MainScreen.module.css";
import UnityWebGL from "../UnityContext/UnityContext";
import { useSuspensionData } from "../SuspensionContext/SuspensionContext";
import OscillationChart from "../OscillationChart/OscillationChart";

const MainScreen = () => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const openHistoryModal = () => {
    setHistoryModalOpen(true);
  };

  const { history, inputData, updateInputData, addToHistory } =
    useSuspensionData();

  const handleInputChange = (e) => {
    updateInputData(e.target.id, e.target.value);
  };

  const handleStart = () => {
    addToHistory();
    setShowGraph(true);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button onClick={openHelpModal}>
            <img
              className={styles.icons}
              src="/src/assets/help-icon.svg"
              alt=""
            />
          </button>
          <button onClick={openHistoryModal}>
            <img
              className={styles.icons}
              src="/src/assets/history-icon.svg"
              alt=""
            />
          </button>
        </div>
        <a className={styles.logout} href="">
          Выход
        </a>
      </div>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <div className={styles.left_side}>
            <h3 className={styles.img_title}>Подвеска автомобиля</h3>
            <UnityWebGL className={styles.img} />
          </div>
          <div className={styles.right_side}>
            <h3 className={styles.img_title}>Подвеска автомобиля</h3>
            {showGraph ? (
              <OscillationChart
                deformation={parseFloat(
                  history[history.length - 1].springDeformation
                )}
                velocity={parseFloat(history[history.length - 1].speed)}
                time={parseFloat(history[history.length - 1].time)}
                stiffness={parseFloat(
                  history[history.length - 1].springStiffness
                )}
                viscosity={parseFloat(
                  history[history.length - 1].mediumViscosity
                )}
                mass={parseFloat(history[history.length - 1].objectMass)}
              />
            ) : (
              <>
                <OscillationChart />
              </>
            )}
          </div>
        </div>
        <div className={styles.params}>
          <h3 className={styles.params_title}>Параметры для ввода</h3>
          <div className={styles.controls}>
            <div className={styles.controls_left}>
              <div className={styles.control_group}>
                <label
                  className={styles.control_label}
                  htmlFor="springDeformation"
                >
                  Деформация пружины (l0, м)
                </label>
                <input
                  className={styles.control_input}
                  type="float"
                  id="springDeformation"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="speed">
                  Направленная скорость (v0, м/с)
                </label>
                <input
                  className={styles.control_input}
                  type="float"
                  id="speed"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="time">
                  Время, с
                </label>
                <input
                  className={styles.control_input}
                  type="float"
                  id="time"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.controls_right}>
              <div className={styles.control_group}>
                <label
                  className={styles.control_label}
                  htmlFor="springStiffness"
                >
                  Жесткость пружины (c)
                </label>
                <input
                  className={styles.control_input}
                  type="float"
                  id="springStiffness"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.control_group}>
                <label
                  className={styles.control_label}
                  htmlFor="mediumViscosity"
                >
                  Вязкость среды (μ)
                </label>
                <input
                  className={styles.control_input}
                  type="float"
                  id="mediumViscosity"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="objectMass">
                  Масса объекта (M, т)
                </label>
                <input
                  className={styles.control_input}
                  type="float"
                  id="objectMass"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.start_button} onClick={handleStart}>
            Рассчитать
          </button>
        </div>
      </div>
      <div className="styles.modals">
        {helpModalOpen && <HelpModal onClose={() => setHelpModalOpen(false)} />}
        {historyModalOpen && (
          <HistoryModal onClose={() => setHistoryModalOpen(false)} />
        )}
      </div>
    </>
  );
};

export default MainScreen;
