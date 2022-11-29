import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuid(), text: text, status: "active" });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={text}
          onChange={handleChange}
          type=""
          placeholder="Add Todo"
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
