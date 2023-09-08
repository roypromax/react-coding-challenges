import React from "react";
import { useState } from "react";

const TodoItem = ({ addTask }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const addTodo = (todo) => {
    setError("");
    if (todo === "") {
      setError("Please enter a task to add to the list");
      return;
    }
    addTask(todo);
    setTodo("");
  };

  return (
    <>
      <div className="todoInput">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter Task"
        />
        <button onClick={() => addTodo(todo)}>Add</button>
      </div>
      {error && <div className="todoError">{error}</div>}
    </>
  );
};

export default TodoItem;
