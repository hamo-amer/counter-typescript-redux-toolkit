import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
interface PayloadUpdate {
  id: number;
  text: string;
}

export interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: [{ id: 0, text: "learn css", done: false }],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        { id: state.todos.length, text: action.payload, done: false },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<PayloadUpdate>) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
