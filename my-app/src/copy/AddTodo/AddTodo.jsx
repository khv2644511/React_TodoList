import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuid(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        type="text" //
        placeholder="Add Todo"
        onChange={handleOnChange}
      />
      <button>Add</button>
    </form>
  );
}
