import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginScreen.module.css";

const LoginScreen = ({ setIsAuthenticated }) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    localStorage.setItem("auth", JSON.stringify({ name, group }));
    setTimeout(() => {
      localStorage.removeItem("auth");
    }, 3600000);
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className={styles.loginScreen}>
      <img alt="Logo" src="/src/assets/logo.png" className="login-logo" />
      <div className={styles.info}>
        <h1 className={styles.title}>Добро пожаловать!</h1>
        <p className={styles.description}>
          Мы команда “Кодамы” и это наш сервис с интерактивной моделью для
          демонстрации колебаний подвески автомобиля
        </p>
        <form className={styles.form} onSubmit={handleLogin}>
          <label className={styles.label} htmlFor="name">
            Введите ваше имя:
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className={styles.label} htmlFor="group">
            Введите вашу группу в формате ХХ-123456:
          </label>
          <input
            className={styles.input}
            id="group"
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />
          <button className={styles.button} type="submit">
            Приступить
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
