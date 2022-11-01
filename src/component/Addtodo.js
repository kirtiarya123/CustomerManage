
import React, { useState } from 'react';

export default function Addtodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit=(e)=>{
    e.preventDefault();
if(!title||!desc){
alert("Title and Desc is not blank");
  }
  props.addTodo(title,desc);
  setTitle("");
  setDesc("");
}

  return (
    
    <div className="container my-3">
      <h3>Add a Todos</h3>
      
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}id="title" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Desc</label>
    <input type="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
<button type="text" className="btn btn-primary">Add todo</button>
</form>
      
    </div>
  )
}
