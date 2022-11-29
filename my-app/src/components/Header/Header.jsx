import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Header.module.css";
import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";

export default function Header({ filter, filters, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={() => toggleDarkMode()}>
        {!darkMode && <BsMoon />}
        {darkMode && <ImSun />}
      </button>
      <DarkMode />
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
