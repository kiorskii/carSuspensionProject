// HelpModal.jsx
import React, { useEffect } from "react";
import styles from "./HelpModal.module.css";

const HelpModal = ({ onClose }) => {
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>
            <img className={styles.icons} src="/assets/help-icon.svg" alt="" />
            <h2>Справка</h2>
          </div>

          <button onClick={onClose} className={styles.closeButton}>
            <img src="/assets/cross-icon.svg" alt="" />
          </button>
        </div>
        <div className={styles.modalBody}>
          <ul className={styles.nav + " " + styles.modalBlock}>
            <li onClick={() => scrollTo(1)} className={styles.nav__el}>
              Устройство подвески
            </li>
            <li onClick={() => scrollTo(2)} className={styles.nav__el}>
              Колебания
            </li>
            <li onClick={() => scrollTo(3)} className={styles.nav__el}>
              Алгоритм решения
            </li>
          </ul>
          <h2 id="1" className={styles.blockTitle}>
            Устройство подвески
          </h2>
          <div
            className={
              styles.modalBlock +
              " " +
              styles.flexBlock +
              " " +
              styles.firstBlock
            }
          >
            <p>
              Подвеска автомобиля представляет собой систему, которая соединяет
              колеса с кузовом или рамой и обеспечивает их взаимодействие. Она
              служит для восприятия и поглощения ударов, вибраций и колебаний,
              возникающих при движении автомобиля по неровностям дороги.
              <br />
              <br />
              Амортизаторы играют важную роль в уменьшении колебаний автомобиля
              и являются одной из составляющих частей подвески автомобиля.
            </p>
            <img
              className={styles.img + " " + styles.amor}
              src="/assets/suspen.PNG"
              alt=""
            />
          </div>
          <p className={styles.modalBlock}>
            Амортизаторы выполняют следующие функции:
          </p>
          <ol className={styles.modalBlock + " " + styles.list}>
            <li>Поглощение ударов и колебаний</li>
            <li>Поддержание контакта колес с дорогой</li>
            <li>
              Предотвращение перекачивания при поворотах или изменении
              направления движения
            </li>
            <li>Улучшение тормозных характеристик</li>
          </ol>
          <p className={styles.modalBlock}>
            Пружины являются еще одним важным компонентом подвески, который
            оказывает значительное влияние на ее поведение и характеристики.
            Пружины поддерживают вес автомобиля и пассажиров, обеспечивая
            оптимальный контакт колес с дорогой при различных нагрузках. Они
            также играют роль в передаче нагрузки от колес к кузову автомобиля и
            наоборот. Жесткость пружин определяет уровень комфорта и
            управляемости автомобиля. Более жесткие пружины обеспечивают более
            точное управление и меньшую склонность к наклонам, в то время как
            более мягкие пружины обеспечивают более комфортное движение за счет
            лучшей амортизации.
          </p>
          <h2 id="2" className={styles.blockTitle}>
            Колебания
          </h2>
          <div
            className={
              styles.modalBlock +
              " " +
              styles.flexBlock +
              " " +
              styles.firstBlock
            }
          >
            <p>
              Колебания бывают свободными и вынужденными, если присутствует
              возмущающая сила, то колебания вынужденные, если нет – свободные.
              В зависимости от наличия силы сопротивления свободные колебания
              могут быть гармоническими и затухающими. Если силы сопротивления
              отсутствуют, то это гармонические колебания, если присутствуют, то
              колебания затухающие. В нашей задаче мы рассматриваем затухающие
              колебания.
            </p>
            <img className={styles.img} src="/assets/table.PNG" alt="" />
          </div>
          <h2 id="3" className={styles.blockTitle}>
            Алгоритм решения
          </h2>
          <p className={styles.modalBlock}>
            Для решения задачи необходимы варьируемые параметры и начальные
            условия.
          </p>
          <div className={styles.modalBlock + " " + styles.flexBlock}>
            <div>
              <p className={styles.modalBlock}>Начальные условия:</p>
              <ol className={styles.list}>
                <li>
                  Начальная деформация пружины (l<sub>0</sub>)
                </li>
                <li>
                  Начальная скорость (v<sub>0</sub>)
                </li>
              </ol>
            </div>
            <div>
              <p className={styles.modalBlock}>Варьируемые параметры:</p>
              <ol className={styles.list}>
                <li>Жесткость пружины (c)</li>
                <li>Коэффициент сопротивления (μ)</li>
                <li>Масса объекта (M)</li>
                <li>Время (t)</li>
              </ol>
            </div>
          </div>
          <p className={styles.modalBlock}>
            На систему подвески автомобиля действуют восстанавливающая сила (F
            <sub>упр</sub>) и сила сопротивления (R). Для того, чтобы понять,
            какое будет движение, необходимо вычислить циклическую частоту
            колебаний (k) и коэффициент, характеризующий вязкость среды (n). Для
            вычисления используются формулы:
          </p>
          <p className={styles.modalBlock + " " + styles.formula}>
            k = √(c/M), n = μ/2M,
          </p>
          <p className={styles.modalBlock}>
            где k – циклическая частота, c – жёсткость пружины, M – масса
            объекта, n – коэффициент, характеризующий вязкость среды, μ –
            коэффициент вязкости.
          </p>
          <p className={styles.modalBlock}>
            Если n ≥ k, то это означает, что мы имеем дело со средой с большой
            вязкостью.
          </p>
          <p className={styles.modalBlock}>
            Из-за этого возникает апериодическое движение. Апериодическое
            движение - частный случай затухающего колебательного движения, при
            котором колебательное движение развиться не может и материальная
            точка или система таких точек, выведенная из положения своего
            устойчивого равновесия, приближается к последнему с убывающей
            скоростью без колебаний.
          </p>
          <p className={styles.modalBlock}>
            Если n {"<"} k, то это означает, что среда с малой вязкостью, и мы
            можем решить задачу.
          </p>
          <p className={styles.modalBlock}>
            Общее решение имеет следующий вид (амплитудная форма записи):
          </p>
          <p className={styles.modalBlock + " " + styles.formula}>
            x = Ae<sup>-nt</sup>sin(k<sub>1</sub>t + α).
          </p>
          <p className={styles.modalBlock}>
            Вычисляются промежуточные величины:
          </p>
          <div className={styles.modalBlock + " " + styles.formula}>
            <ul className={styles.formulaList}>
              <li>
                k<sub>1</sub> = √(k<sup>2</sup>-n<sup>2</sup>),
              </li>
              <li>
                λ<sub>ст</sub> = (M/c)*g,
              </li>
              <li>
                x<sub>0</sub> = -(λ<sub>ст</sub>-l<sub>0</sub>),
              </li>
              <li>
                x ̇<sub>0</sub> = v<sub>0</sub>,
              </li>
              <li>
                C<sub>1</sub> = x0, C<sub>2</sub> = (x ̇<sub>0</sub>+n*x
                <sub>0</sub>)/k
                <sub>1</sub>,
              </li>
              <li>
                A = √(C<sub>1</sub>
                <sup>2</sup>+C<sub>2</sub>
                <sup>2</sup>),
              </li>
            </ul>
          </div>
          <p className={styles.modalBlock}>
            Начальная фаза колебаний вычисляется из следующих выражений:
          </p>
          <p className={styles.modalBlock + " " + styles.formula}>
            sin⁡ α=C<sub>1</sub>/A, cos ⁡α=C<sub>2</sub>/A
          </p>
          <div className={styles.modalBlock + " " + styles.flexBlock}>
            <p>
              1. Если C<sub>1</sub> ≠ 0, то α=arcsin⁡ (C<sub>1</sub>/A)
            </p>
            <p>
              2. Если C<sub>2</sub> ≠ 0, то α=arccos (⁡C<sub>2</sub>/A)
            </p>
          </div>
          <h2 className={styles.blockTitle}>Блок-схема:</h2>
          <img
            className={styles.modalImgSchema}
            src="/assets/schema.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
