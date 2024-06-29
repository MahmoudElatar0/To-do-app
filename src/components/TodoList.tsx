import React from "react"
import { TodoType } from "../types"
import Todo from "./Todo"
import { useTranslation } from "react-i18next"

interface TodoListProps {
  todos: TodoType[]
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number, text: string) => void
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const { t, i18n } = useTranslation()

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
        {todos.map((todo) => (
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
