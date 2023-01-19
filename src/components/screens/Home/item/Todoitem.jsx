import React from "react";
import Check from "./Check";
import cn from 'classnames';
import {BsTrash} from 'react-icons/bs'
 

const TodoItem = ({todo, changeTodo}) => {
    return (
    <button 
    className='flex items-center justify-between mb-2 rounded-2xl bg-gray-800 p-5 w-full'
    onClick={()=>changeTodo(todo._id)}
    >
    <span className='flex items-center'>
        <Check isCompleted={todo.isCompleted}/>
    <span 
        className={cn({'line-through':todo.isCompleted})}>{todo.title}
    </span>
    </span>
        <BsTrash size={22} className='text-gray-400 hover:text-red-400'/>
    </button>
    )
}

export default TodoItem 