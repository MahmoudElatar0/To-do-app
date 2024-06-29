// src/components/Todo.tsx
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { TodoType } from "../types"

interface TodoProps {
  todo: TodoType
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number, text: string) => void
}

const Todo: React.FC<TodoProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const { t } = useTranslation()

  const handleSave = () => {
    editTodo(todo.id, editText)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between p-2">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="form-checkbox h-5 w-5 text-purple-600"
          />
          <span
            className={`ml-2 ${
              todo.completed ? "line-through text-gray-500" : "text-black"
            }`}
          >
            {t("todo_item", { text: todo.text })}
          </span>
        </div>
      )}
      <div className="flex items-center space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700"
          >
            {t("save")}
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            {t("edit")}
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-500 hover:text-gray-700"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default Todo
