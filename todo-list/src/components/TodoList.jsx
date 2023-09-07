import React from "react";

const TodoList = ({ tasks, removeTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <h3>No tasks added yet!</h3>
      ) : (
        tasks.map((item, index) => {
          return (
            <div className="taskItem">
              {item} <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TodoList;
