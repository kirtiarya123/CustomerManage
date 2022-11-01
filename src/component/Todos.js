import React from 'react'
import TodoItem from '../component/TodoItem.js';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className="my-3">Todos Lists</h3>
      {props.todos.length===0? "No todo found":
       props.todos.map((todo)=>{
         return<TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>
      })
    
      }
      
    </div>
  )
}
