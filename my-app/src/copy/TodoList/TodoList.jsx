import React from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1234,
      text: "감자캐기",
      status: "active",
    },
  ]);

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이트 해야함
    console.log(todo);
    setTodos([...todos, todo]);
  };

  const handleUpdate = (update) => {
    setTodos(todos.map((cur) => (cur.id === update.id ? update : cur)));
  };

  const handleDelete = (deleted) => {
    console.log(deleted);
    setTodos(todos.filter((cur) => cur.id !== deleted.id));
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
