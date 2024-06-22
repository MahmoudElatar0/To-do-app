import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos.todos))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
