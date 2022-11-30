import React from "react";
import { VscDiffRemoved } from "react-icons/vsc";
import { v4 as uuid } from "uuid";

export default function Todo({ key, todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    console.log(e);
    const status = e.target.checked ? "complete" : "active";
    onUpdate({ ...todo, status: status });
  };

  const handleDelete = (e) => {
    onDelete(todo);
  };

  return (
    <>
      <li key={key}>
        <input
          id="checkbox" //
          type="checkbox" //
          checked={status === "complete"} //
          onChange={handleChange}
        />
        <label htmlFor="checkbox">{text}</label>
        <button onClick={handleDelete}>
          <VscDiffRemoved />
        </button>
      </li>
    </>
  );
}
