import React, { createContext, useState, useContext } from "react";
import { Todo } from "../models/todoModel";

export interface TodoContextType {
    todo: string
    todos: Todo[]
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e:React.FormEvent) => void
}

interface ITodoProviderProps {
    children: any
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const useTodoContext = () => {
    return useContext(TodoContext)
}

const TodoProvider = ({children} : ITodoProviderProps) => {
    const [todo, setTodo] = useState<string>('') //todo är definerat till en string och kan ej få ett nummer eller ett true/false värde 
    const [todos, setTodos] = useState<Todo[]>([]) //denna är av typen todo array, en lista av todos som vi definerat genom Todo

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
    
        setTodos(currentTodos => [...currentTodos, { id: Date.now(), text: todo, isCompleted: false }]) //id osv kräver att det skriv senligt mallen todo alltså id, text och iscompleted
        setTodo('')
    }

    return (
        <TodoContext.Provider value={{ todo, setTodo, todos, handleSubmit }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider