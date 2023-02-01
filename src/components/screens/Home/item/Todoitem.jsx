import React from "react";
import Check from "./Check";
import cn from 'classnames';
import { BsTrash } from 'react-icons/bs'
import { BsArrowDownSquare } from 'react-icons/bs'
import { BsArrowUpSquare } from 'react-icons/bs'


const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (

        <div
            className='flex items-center justify-between mb-2 rounded-2xl bg-gray-800 p-5 w-full'
        >

            <button className='flex items-center' onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />

                <span
                    className={cn({ 'line-through': todo.isCompleted })}>{todo.title}
                </span>

            </button>


            <div className="flex items-center">

                <button  className="mr-3">
                    <BsArrowDownSquare size={20} className=' text-gray-400 hover:text-green-400 transition-colors ease-in-out duration-300'/>
                </button>

                <button  className="mr-3">
                    <BsArrowUpSquare size={20} className=' text-gray-400 hover:text-green-400 transition-colors ease-in-out duration-300'/>
                </button>


                <button onClick={() => removeTodo(todo._id)}>
                    <BsTrash size={22} className='text-gray-400 hover:text-red-400 transition-colors ease-in-out duration-300' />
                </button>

            </div>


        </div>
    )
}

export default TodoItem 