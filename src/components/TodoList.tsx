import React from "react"
import Todo from "./Todo"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { TodoState } from "../reducers/todoSlice"
import { TodoType } from "../types"

interface TodoListProps {
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number, text: string) => void
}

const TodoList: React.FC<TodoListProps> = ({
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const todos = useSelector((state: TodoState) => state.todos)
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div>
        <button
          className="mt-2 w-6/12 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className="mt-2 w-6/12 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
          onClick={() => changeLanguage("ar")}
        >
          العربية
        </button>
      </div>
      <div className="bg-white rounded-b-md p-4 shadow-md">
        {todos.length === 0 && (
          <p className="text-center text-gray-500">No tasks</p>
        )}
        {todos.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </>
  )
}

export default TodoList
