import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {ImBin2} from 'react-icons/im'
import './TodoWrapper/index.css'


const Todo = ({todo, toggleComplete, deleteTask, editTask})=>{
  return (
    <div className='todos'>
      <p onClick={()=> toggleComplete(todo.id)} className={todo.completed ? 'line' : ''}>{todo.task}</p>
      <div className='icons'>
        <BiEdit className='first-icon' onClick={()=> editTask(todo.id)}/>
        <ImBin2 onClick={()=> deleteTask(todo.id)} />
      </div>
    </div>
  )
}


export default Todo