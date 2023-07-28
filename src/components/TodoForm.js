import React, {useState} from 'react'
import './TodoWrapper/index.css'


const TodoForm = ({addTodo})=>{

  const [value, setValue] = useState('')

  const handleSubmit = (e)=>{

    e.preventDefault()
    addTodo(value)
    setValue('')

    

    console.log(value)

  }

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' value={value}  onChange={(e)=> setValue(e.target.value)} placeholder='what do you want to do today?' className='form' ></input>
      <button>Add Task</button>
    </form>
  )
}

export default TodoForm