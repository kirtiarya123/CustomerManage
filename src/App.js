
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Todos from './component/Todos.js';
import Addtodo from './component/Addtodo.js';
import React, { useState, useEffect } from 'react';

const App = () => {
  let initTodo;
  if  (localStorage.getItem("todos")===null){
initTodo=[];
  }
  else{
      initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  let onDelete=(todo)=>{
    console.log("I want to delet",todo)
    setTodos(todos.filter((e)=>{
return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

 const addTodo=(title,desc)=>{
  let sno;
if(todos.length===0){
sno=0;
}
else{
   sno=todos[todos.length-1].sno+1;
}
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
 

  const [todos, setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <div>
<Header title="My Todo Lists" searchBar={true}/>
<Addtodo addTodo={addTodo}/>
<Todos todos={todos} onDelete={onDelete}/>

<Footer/>
    </div>
   
  )
}


export default App
