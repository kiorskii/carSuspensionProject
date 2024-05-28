import React, { useState } from "react";
import HelpModal from "../HelpModal/HelpModal";
import HistoryModal from "../HistoryModal/HistoryModal";
import styles from "./MainScreen.module.css";
import UnityWebGL from "../UnityContext/UnityContext";
import { useSuspensionData } from "../SuspensionContext/SuspensionContext";
import OscillationChart from "../OscillationChart/OscillationChart";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../ErrorModal/ErrorModal";

const MainScreen = ({ setIsAuthenticated }) => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const openHistoryModal = () => {
    setHistoryModalOpen(true);
  };

  const openErrorModal = () => {
    setErrorModalOpen(true);
  };

  const { history, inputData, updateInputData, addToHistory } =
    useSuspensionData();

  const handleInputChange = (e) => {
    updateInputData(e.target.id, e.target.value);
  };

  const handleStart = () => {
    const k = Math.sqrt(inputData.springStiffness / inputData.objectMass);
    const n = inputData.mediumViscosity / (2 * inputData.objectMass);

    if (n >= k) {
      setErrorModalOpen(true);
    }
    addToHistory();
    setShowGraph(true);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const studentName = JSON.parse(localStorage.getItem("auth")).name;
  const studentGroup = JSON.parse(localStorage.getItem("auth")).group;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button onClick={openHelpModal}>
            <img
              className={styles.icons}
              src="/assets/help-icon.svg"
              alt=""
            />
          </button>
          <button onClick={openHistoryModal}>
            <img
              className={styles.icons}
              src="/assets/history-icon.svg"
              alt=""
            />
          </button>
        </div>
        <div className={styles.info}>
          <h2>{studentName}</h2>
          <h2>{studentGroup}</h2>
          <a className={styles.logout} onClick={handleLogout} href="">
            Выход
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <div className={styles.left_side}>
            <h3 className={styles.img_title}>Подвеска автомобиля</h3>
            <UnityWebGL className={styles.img} />
          </div>
          <div className={styles.right_side}>
            <h3 className={styles.img_title}>
              График затухающих колебаний подвески
            </h3>
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
                  Деформация пружины (l0), м
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
                  Начальная скорость (v0), м/с
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
                  Время (t), c
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
                  Жесткость пружины (с), Н/м
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
                  Вязкость среды (μ), кг/м*с
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
                  Масса объекта (М), кг
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
          <p className={styles.addedText}>
            Формула для расчета: x = Ae^-nt sin(k1t + α)
            <br />
            Подробнее см. в{" "}
            <b className={styles.link} onClick={openHelpModal}>
              Справка
            </b>
          </p>
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
        {errorModalOpen && (
          <ErrorModal onClose={() => setErrorModalOpen(false)} />
        )}
      </div>
    </>
  );
};

export default MainScreen;
