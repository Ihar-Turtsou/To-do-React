import React, { useState } from "react";
import TodoItem from "./item/Todoitem"


const data = [
    {
        _id: '213hdss1jgjh',
        title: 'First task',
        isCompleted: false,
    },
    {
        _id: '213h1jgjkjkjhh',
        title: 'Second task',
        isCompleted: false,
    },
    {
        _id: '213h32ewqe1jgjh',
        title: 'Third task',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copyTodos = [...todos]
        const currentTodos = copyTodos.find(t => t._id === id)
        currentTodos.isCompleted = !currentTodos.isCompleted
        setTodos(copyTodos)
    }

    const removeTodo = (id) =>
        setTodos([...todos].filter(t => t._id !== id))


    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos([
            {
                _id: Date.now() + Math.random() + "",
                title,
                isCompleted: false
            },
            ...todos
        ])
        setTitle('')
    }



    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>To do list</h1>

            <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-2 w-full">
                <input
                    type='text'
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                    onKeyDown={event => event.key === 'Enter' && addTodo(title)}
                    className='bg-transparent w-full border-none outline-none'
                    placeholder='Add a task'
                />
            </div>



            {todos.map(todo => (

                <TodoItem
                    key={todo._id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />

            ))}
        </div>
    )
}

export default Home
