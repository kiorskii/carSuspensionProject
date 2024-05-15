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
          <ol className={styles.historyList}>
            <li className={styles.el}>
              <h2 className={styles.itemTitle}>
                График колебаний автомобильной подвески
              </h2>
              <div className={styles.itemInfo}>
                <img className={styles.img} src="/src/assets/graph.jpg" alt="" />
                <div className={styles.itemInfoContainer}>
                  <h3 className='itemPreTitle'>Параметры</h3>
                  <ul className={styles.paramsList}>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Деформация пружины (l0), м</p>
                      <p className={styles.paramsValue}>4</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Начальная скорость (v0), м/с</p>
                      <p className={styles.paramsValue}>90</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Время, c</p>
                      <p className={styles.paramsValue}>3600</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Жесткость пружины (с)</p>
                      <p className={styles.paramsValue}>40</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Вязкость среды (μ)</p>
                      <p className={styles.paramsValue}>15</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Масса объекта (М), т</p>
                      <p className={styles.paramsValue}>1,5</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.el}>
              <h2 className={styles.itemTitle}>
                График колебаний автомобильной подвески
              </h2>
              <div className={styles.itemInfo}>
                <img className={styles.img} src="/src/assets/graph.jpg" alt="" />
                <div className={styles.itemInfoContainer}>
                  <h3 className='itemPreTitle'>Параметры</h3>
                  <ul className={styles.paramsList}>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Деформация пружины (l0), м</p>
                      <p className={styles.paramsValue}>4</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Начальная скорость (v0), м/с</p>
                      <p className={styles.paramsValue}>90</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Время, c</p>
                      <p className={styles.paramsValue}>3600</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Жесткость пружины (с)</p>
                      <p className={styles.paramsValue}>40</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Вязкость среды (μ)</p>
                      <p className={styles.paramsValue}>15</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Масса объекта (М), т</p>
                      <p className={styles.paramsValue}>1,5</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.el}>
              <h2 className={styles.itemTitle}>
                График колебаний автомобильной подвески
              </h2>
              <div className={styles.itemInfo}>
                <img className={styles.img} src="/src/assets/graph.jpg" alt="" />
                <div className={styles.itemInfoContainer}>
                  <h3 className='itemPreTitle'>Параметры</h3>
                  <ul className={styles.paramsList}>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Деформация пружины (l0), м</p>
                      <p className={styles.paramsValue}>4</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Начальная скорость (v0), м/с</p>
                      <p className={styles.paramsValue}>90</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Время, c</p>
                      <p className={styles.paramsValue}>3600</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Жесткость пружины (с)</p>
                      <p className={styles.paramsValue}>40</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Вязкость среды (μ)</p>
                      <p className={styles.paramsValue}>15</p>
                    </li>
                    <li className={styles.paramsItem}>
                      <p className={styles.paramsLabel}>Масса объекта (М), т</p>
                      <p className={styles.paramsValue}>1,5</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

          </ol>

        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
