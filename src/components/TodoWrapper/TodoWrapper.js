import React, {useState, useEffect} from 'react'
import './index.css'
import TodoForm from '../TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from '../Todo'
import EditTodoForm from '../EditTodosForm'
import {GrRefresh} from 'react-icons/gr'


const TodoWrapper = ()=>{

  const [todos, setTodos] = useState(localStorage.getItem('My_todo') ? JSON.parse(localStorage.getItem('My_todo')) : [])

  

  useEffect(()=>{
    localStorage.setItem('My_todo', JSON.stringify(todos))
  })


  const addTodo = (value)=>
    value.length > 0 ?
    setTodos([...todos, {id:uuidv4(), task:value, completed: false, isEdited: false}])
    : null
  

  const toggleComplete = (id)=>{

    setTodos(todos.map((todo)=> todo.id === id ? {...todo, completed:!todo.completed } : todo))
    console.log(todos.id)
    console.log(id)
  }

  const deleteTask = (id) =>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  const editTodo = (task, id)=>{
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, task, isEdited: !todo.isEdited}: todo))

  }

  const editTask = (id)=>{
    setTodos(todos.map((todo)=> todo.id===id ? {...todo, isEdited: !todo.isEdited}: todo))
  }

  const refresh = ()=>{
    setTodos([])
  }



  return (
    <div className='container'>
      <div className='h-container'><h1>Get This Done Wizzy</h1></div>
      
      <TodoForm  addTodo={addTodo}/>
      {
        todos.map((todo, i)=> todo.isEdited ? (<EditTodoForm editTodo={editTodo} todo={todo}/>)
        : 
          (<Todo todo={todo} key={i}  toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
       ) )
      }

      {todos.length> 0 ? <div className='reset'>Reset Todo <GrRefresh onClick={refresh} /></div> : null}
      
      
    </div>
    
  )
}

export default TodoWrapper