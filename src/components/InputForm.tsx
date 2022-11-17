import React from 'react'
import { TodoContext, TodoContextType } from '../context/TodoContext'

const InputForm: React.FC = () => { /* inputform är av typen funktionskomponent FC som kommer från react-delen */
  const { todo, setTodo, handleSubmit } = React.useContext(TodoContext) as TodoContextType;

  return (
    <form onSubmit={handleSubmit} className="mb-5">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="form-control" placeholder="Enter Todo..." />
        <button type="submit" className="btn">Add Todo</button>
    </form>
  )
}

export default InputForm