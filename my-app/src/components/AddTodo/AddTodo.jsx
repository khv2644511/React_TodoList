import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          type=""
          placeholder="Add Todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
