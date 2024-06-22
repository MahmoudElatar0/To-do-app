import React, { useState } from "react"
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
            {todo.text}
          </span>
        </div>
      )}
      <div className="flex items-center space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75l11.09-11.09-3.75-3.75L3 17.25zm18.71-12.04a1.004 1.004 0 0 0 0-1.42l-2.54-2.54a1.004 1.004 0 0 0-1.42 0L15.13 4.21l3.75 3.75 2.83-2.83z" />
            </svg>
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
