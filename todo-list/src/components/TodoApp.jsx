import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((oldTasks) => {
      return [...oldTasks, newTask];
    });
  };

  const removeTask = (index) => {
    setTasks((oldTasks) => {
      return oldTasks.filter((item, i) => {
        return i !== index;
      });
    });
  };

  return (
    <div className="todoApp">
      <h1>Todo List</h1>
      <div>
        <TodoItem addTask={addTask} />
      </div>
      <div className="todoList">
        <TodoList tasks={tasks} removeTask={removeTask} />
      </div>
    </div>
  );
};

export default TodoApp;
