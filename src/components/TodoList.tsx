import React from "react"
import { TodoType } from "../types"
import Todo from "./Todo"

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
  return (
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
  )
}

export default TodoList
