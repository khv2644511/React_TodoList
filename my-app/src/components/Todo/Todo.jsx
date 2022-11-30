import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./Todo.module.css";

export default function Todo({ key, todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handelChange = (e) => {
    // console.log(e);
    const status = e.target.checked ? "complete" : "active";
    onUpdate({ ...todo, status: status });
  };

  const handleClick = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo} key={key}>
      <input
        className={styles.checkbox}
        id={id}
        onChange={handelChange} //
        checked={status === "complete"} //
        type="checkbox"
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleClick}>
          <RiDeleteBin6Line />
        </button>
      </span>
    </li>
  );
}
