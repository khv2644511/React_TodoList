import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

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
    <li key={key}>
      <input
        id="checkbox"
        onChange={handelChange} //
        checked={status === "complete"} //
        type="checkbox"
      />
      <label htmlFor="checkbox"> {text}</label>
      <button onClick={handleClick}>
        <RiDeleteBin6Line />
      </button>
    </li>
  );
}
