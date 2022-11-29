import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Header.module.css";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header className={styles.header}>
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
