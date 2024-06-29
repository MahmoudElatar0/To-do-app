import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "./page/Header"
import { RootState } from "./reducers/store"
import { addTodo, toggleTodo, deleteTodo, editTodo } from "./reducers/todoSlice"
import TodoList from "./components/TodoList"

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("")
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return
    dispatch(addTodo(newTodo))
    setNewTodo("")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50">
      <div className="w-full max-w-md">
        <Header />
        <div className="bg-white rounded-md shadow-md">
          <TodoList
            todos={todos}
            toggleTodo={(id) => dispatch(toggleTodo(id))}
            deleteTodo={(id) => dispatch(deleteTodo(id))}
            editTodo={(id, text) => dispatch(editTodo({ id, text }))}
          />
          <div className="p-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="New task"
            />
            <button
              onClick={handleAddTodo}
              className="mt-2 w-full p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
            >
              + New task
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
