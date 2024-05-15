// HelpModal.jsx
import React from 'react';
import styles from './HelpModal.module.css';

const HelpModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>
            <img className={styles.icons} src="/src/assets/help-icon.svg" alt="" />
            <h2>Справка</h2>
          </div>

          <button onClick={onClose} className={styles.closeButton}>
            <img src="/src/assets/cross-icon.svg" alt="" />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalBlock + " " + styles.flexBlock + " " + styles.firstBlock}>
            <p>Колебания бывают свободными и вынужденными, если присутствует возмущающая сила, то колебания вынужденные, если нет – свободные. В зависимости от наличия силы сопротивления свободные колебания могут быть гармоническими и затухающими. Если силы сопротивления отсутствуют, то это гармонические колебания, если присутствуют, то колебания затухающие. В нашей задаче мы рассматриваем затухающие колебания.</p>
            <img className={styles.img} src="/src/assets/image 13.jpg" alt="" />
          </div>
          <p className={styles.modalBlock}>
            Для решения задачи необходимы варьируемые параметры и начальные условия.
          </p>

          <div className={styles.modalBlock + " " + styles.flexBlock}>
            <div>
              <p className={styles.modalBlock}>
                Начальные условия:
              </p>
              <ol className={styles.list}>
                <li>Начальная деформация пружины (l0)</li>
                <li>Начальная скорость (v0)</li>
              </ol>
            </div>
            <div>
              <p className={styles.modalBlock}>
                Варьируемые параметры:
              </p>
              <ol className={styles.list}>
                <li>Жесткость пружины (c)</li>
                <li>Коэффициент сопротивления (μ)</li>
                <li>Масса объекта (M)</li>
                <li>Время (t)</li>
              </ol>
            </div>
          </div>
          <p className={styles.modalBlock}>
            На систему подвески автомобиля действуют восстанавливающая сила (Fупр) и сила сопротивления (R). Для того, чтобы понять, какое будет движение, необходимо вычислить циклическую частоту колебаний (k) и коэффициент, характеризующий вязкость среды (n). Для вычисления используются формулы:
          </p>
          <p className={styles.modalBlock + " " + styles.formula}>
            k = √(c/M), n = μ/2M,
          </p>
          <p className={styles.modalBlock}>
            где
            k – циклическая частота,
            c – жёсткость пружины,
            M – масса объекта,
            n – коэффициент, характеризующий вязкость среды,
            μ – коэффициент вязкости.
          </p>
          <p className={styles.modalBlock}>
            Если n ≥ k, то это означает, что мы имеем дело со средой с большой вязкостью.
          </p>
          <p className={styles.modalBlock}>
            Из-за этого возникает апериодическое движение. Апериодическое движение - частный случай затухающего колебательного движения, при котором колебательное движение развиться не может и материальная точка или система таких точек, выведенная из положения своего устойчивого равновесия, приближается к последнему с убывающей скоростью без колебаний.
          </p>
          <p className={styles.modalBlock}>
            Если n {"<"} k, то это означает, что среда с малой вязкостью, и мы можем решить задачу.
          </p>
          <p className={styles.modalBlock}>
            Общее решение имеет следующий вид (амплитудная форма записи):
          </p>
          <p className={styles.modalBlock + " " + styles.formula}>
            x = Ae-nt sin(k1t + α).
          </p>
          <p className={styles.modalBlock}>
            Вычисляются промежуточные величины:
          </p>
          <div className={styles.modalBlock + " " + styles.formula}>
            <ul className={styles.formulaList}>
              <li>k1 = √(k2-n2),</li>
              <li>λст = (M/c)*g,</li>
              <li>x0 = -(λст-l0),</li>
              <li>x ̇0 = v0,</li>
              <li>C1 = x0, C2 = (x ̇0+n*x0)/k1,</li>
              <li>A = √(C12+C22),</li>
            </ul>
          </div>
          <p className={styles.modalBlock}>
            Начальная фаза колебаний вычисляется из следующих выражений:
          </p>
          <p className={styles.modalBlock + " " + styles.formula}>
            sin⁡ α=C1/A, cos ⁡α=C2/A
          </p>
          <div className={styles.modalBlock + " " + styles.flexBlock}>
            <p>
              1. Если C1 ≠ 0, то α=arcsin⁡ (C1/A)
            </p>
            <p>
              2. Если C2 ≠ 0, то α=arccos (⁡C2/A)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
