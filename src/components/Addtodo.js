import React from 'react'
import  { useState } from "react";

export default function Addtodo(props) {

 const [title,setTitle] = useState("");
 const [desc,setDesc] = useState("");  


const onSubmit=(e) =>{
e.preventDefault(); //this will prevent the  reloading of page
if(!title || !desc){
  alert("title or desc cannot be blank");
}
else{
  props.addTodo(title,desc);
setTitle("");
setDesc("");
}
}
  return (
    <>
    <div className='flex justify-center '> 
      <form className={`text-${props.text}  pb-5  w-96   `} onSubmit={onSubmit} >
  <div className="mb-3">
    <div className='pb-4'>
    <h5 className={`text-xl py-3 todoitem text-center border-2 border-red-700 w-30 bg-${props.text==="black"?"gray-400":"black"} justify-items-center rounded-none `}>Add Todo</h5>
    </div>
    <label htmlFor="title" className="form-label">{props.todoWork}</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
  </div> 
  <div className="mb-3">  
    <label htmlFor="desc" className="form-label">{props.desc}</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-success  btn-sm bg-green-700">{props.add}</button>
</form></div>
</>
  )
}
  