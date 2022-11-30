import React from "react";
import { DarkModeContext, useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { useContext } from "react";

export default function Header({ filter, filters, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={styles.header}>
      <button onClick={() => toggleDarkMode()} className={styles.toggle}>
        {!darkMode && <BsMoon />}
        {darkMode && <ImSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, i) => (
          <li key={i}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
