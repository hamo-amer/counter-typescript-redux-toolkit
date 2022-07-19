import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, Todo } from "./features/todoSlice";

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(removeTodo(todo.id));
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <p>{todo.text}</p>
      <button onClick={handleDelete}>remove</button>
      <button>update</button>
    </div>
  );
}

export default TodoItem;
