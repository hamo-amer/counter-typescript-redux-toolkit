import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import TodoItem from "./Todo";

function Todos() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <div>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Todos;
