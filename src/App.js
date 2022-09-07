import { CommonButton } from "./components/atom/CommonButton";
import { CompleteButton } from "./components/atom/CompleteButton";
import { InputArea } from "./components/atom/InputArea";
import "./styles.css";
import React, { useState } from "react";
import { InputAreaButton } from "./components/molecule/InputAreaButton";
import { InputTodo } from "./components/Organism/InputTodo";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    console.log("hige");
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  console.log("hi");

  return (
    <div className="App">
      <InputTodo>
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClick={onClickAdd}
      </InputTodo>
    </div>
  );
}
