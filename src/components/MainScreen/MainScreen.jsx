import React, { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal';
import HistoryModal from '../HistoryModal/HistoryModal';
import styles from './MainScreen.module.css';

const MainScreen = () => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const openHistoryModal = () => {
    setHistoryModalOpen(true);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button onClick={openHelpModal}>
            <img className={styles.icons} src="/src/assets/help-icon.svg" alt="" />
          </button>
          <button onClick={openHistoryModal}>
            <img className={styles.icons} src="/src/assets/history-icon.svg" alt="" />
          </button>
        </div>
        <a className={styles.logout} href="">Выход</a>
      </div>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <div className={styles.left_side}>
            <h3 className={styles.img_title}>Подвеска автомобиля</h3>
            <img className={styles.img} src="/src/assets/model.jpg" alt="" />
          </div>
          <div className={styles.right_side}>
            <h3 className={styles.img_title}>Подвеска автомобиля</h3>
            <img className={styles.img} src="/src/assets/graph.jpg" alt="" />
          </div>
        </div>
        <div className={styles.params}>
          <h3 className={styles.params_title}>Параметры для ввода</h3>
          <div className={styles.controls}>
            <div className={styles.controls_left}>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="spring-deformation">Деформация пружины (l0, м)</label>
                <input className={styles.control_input} type="number" id="spring-deformation" />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="speed">Направленная скорость (v0, м/с)</label>
                <input className={styles.control_input} type="number" id="speed" />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="time">Время, с</label>
                <input className={styles.control_input} type="number" id="time" />
              </div>
            </div>
            <div className={styles.controls_right}>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="spring-stiffness">Жесткость пружины (c)</label>
                <input className={styles.control_input} type="number" id="spring-stiffness" />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="medium-viscosity">Вязкость среды (μ)</label>
                <input className={styles.control_input} type="number" id="medium-viscosity" />
              </div>
              <div className={styles.control_group}>
                <label className={styles.control_label} htmlFor="object-mass">Масса объекта (M, т)</label>
                <input className={styles.control_input} type="number" id="object-mass" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.start_button}>Пуск</button>
        </div>
      </div >

      <div className="styles.modals">
        {helpModalOpen && <HelpModal onClose={() => setHelpModalOpen(false)} />}
        {historyModalOpen && <HistoryModal onClose={() => setHistoryModalOpen(false)} />}
      </div>
    </>
  );
};

export default MainScreen;
