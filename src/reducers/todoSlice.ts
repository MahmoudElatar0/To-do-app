import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoType } from "../types"

export interface TodoState {
  todos: TodoType[]
}

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      state.todos.push(newTodo)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
