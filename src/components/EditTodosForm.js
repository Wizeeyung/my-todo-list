import React, {useState} from 'react'
import './TodoWrapper/index.css'


const EditTodoForm = ({editTodo, todo})=>{

  const [value, setValue] = useState(todo.task)

  

  const handleSubmit = (e)=>{

    e.preventDefault()
    editTodo(value, todo.id)
    setValue('')

    console.log(value)

  }

  return(
    <form onSubmit={handleSubmit} className='edit-todo'>
      <input type='text' value={value}  onChange={(e)=> setValue(e.target.value)} placeholder='what do you want to update?' className='form' ></input>
      <button>Update Task</button>
    </form>
  )
}

export default EditTodoForm