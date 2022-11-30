import React, { useEffect } from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  // 초깃값을 설정할 때 콜백함수를 사용해서 state가 변할 때마다 실행되지 않게 해야함
  // readTodoFromLocalStorage() => X
  // () =>readTodoFromLocalStorage() => O
  const [todos, setTodos] = useState(() => readTodoFromLocalStorage());

  useEffect(() => {
    console.log(todos);
    //   todos가 바뀌었을 때 로컬 스토리지에 저장하기
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
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

function readTodoFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
