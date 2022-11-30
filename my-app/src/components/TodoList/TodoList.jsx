import React from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "고구마캐기",
      status: "active",
    },
    {
      id: "2",
      text: "깜자캐기",
      status: "active",
    },
    {
      id: "3",
      text: "응가",
      status: "active",
    },
  ]);

  localStorage.setItem("todos", todos);
  const handleAdd = (todo) => {
    localStorage.todos.push(JSON.stringify(todo));
    setTodos([...todos, todo]);
  };

  const handleUpdate = (update) => {
    setTodos(todos.map((item) => (item.id === update.id ? update : item)));
  };

  const handelDelete = (deleted) => {
    setTodos(todos.filter((item) => item.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);
  // console.log(filtered);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item} //
            onUpdate={handleUpdate} //
            onDelete={handelDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
