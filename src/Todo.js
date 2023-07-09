import React from "react";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(todo);
    if (todo === "") {
      return;
    }
    setTodos([todo, ...todos]);
    console.log(todos);
    setTodo("");
  };

  return (
    <div>
      <h1>My To Do({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="write your to do ..."
          onChange={onChange}
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <div>
        <ul>
          {todos.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

// todo 지우기 기능
