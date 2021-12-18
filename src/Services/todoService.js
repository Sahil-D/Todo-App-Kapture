import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  todoToUpdate: null,
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    setTodoToUpdate: (state, action) => {
      state.todoToUpdate = {
        index: action.payload.index,
        value: action.payload.value,
      };
    },
    resetTodoToUpdate: (state) => {
      state.todoToUpdate = null;
    },
    updateTodo: (state, action) => {
      const todo_index = action.payload.index;
      const updated_value = action.payload.value;
      state.todos[todo_index] = updated_value;
    },
    deleteTodo: (state, action) => {
      const todo_index = action.payload;
      state.todos.splice(todo_index, 1);
    },
  },
});

export const {
  addTodo,
  setTodoToUpdate,
  resetTodoToUpdate,
  updateTodo,
  deleteTodo,
} = todoSlice.actions;
