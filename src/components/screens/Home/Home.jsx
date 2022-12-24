import React from "react";
import TodoItem from "./Todoitem"

const todos = [
    {
       _id: '213hdss1jgjh',
       title: 'Finish the essay collaboration',
       isCompleted: false,
    },
    {
        _id: '213h1jgjkjkjhh',
       title: 'Read book',
       isCompleted: false,
    },
    {
        _id: '213h32ewqe1jgjh',
       title: 'Skip this video',
       isCompleted: false,
    },
]

const Home = () => {
    return (
    <div className="bg-gray-900 h-screen text-white">
    {todos.map(todo => (
       <TodoItem key={todo._id} todo={todo}/>
    ))}
    </div>
    )
}

export default Home
