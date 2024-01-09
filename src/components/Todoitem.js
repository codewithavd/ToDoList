import React from "react"; 

export default function Todoitem(props) {
  //or else you can use ({todo}) instead of props to directly asses the value present in todo
  return (
    <>
    <div className="flex justify-start  ">
      <div className=" p-3 ">
      <p>{props.todo.sno}</p>
        <h3 className="text-xl font-bold">{props.todo.title}</h3>
        <p>{props.todo.desc}</p>
        <button className="btn btn-sm btn-danger " onClick={()=>{props.onDelete(props.todo)}} >Delete</button>
      </div>
      </div>
    </>

    //func() is calling the function and func is passing the function. And if we call the function then it must run but if we pass the func then it will run when it is needed.
  );
}
