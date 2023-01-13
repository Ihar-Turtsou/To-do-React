import React, { useState } from "react";
import TodoItem from "./item/Todoitem"

const data = [
    {
       _id: '213hdss1jgjh',
       title: 'Finish the essay collaboration',
       isCompleted: true,
    },
    {
        _id: '213h1jgjkjkjhh',
       title: 'Read book',
       isCompleted: false,
    },
    {
        _id: '213h32ewqe1jgjh',
       title: 'Skip this video',
       isCompleted: true,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copyTodos =[...todos]
        const currentTodos = copyTodos.find(t=>t._id === id)
        currentTodos.isCompleted = !currentTodos.isCompleted
        setTodos(copyTodos)
    }

 
    return (
    <div className='text-white w-4/5 mx-auto'>
    <h1 className='text-2xl font-bold text-center mb-10'>To do list</h1>
    {todos.map(todo => (
       <TodoItem key={todo._id} todo={todo} changeTodo = {changeTodo}/>
    ))}
    </div>
    )
}

export default Home
