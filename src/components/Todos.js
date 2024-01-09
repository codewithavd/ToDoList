import React from "react";
import Todoitem from "./Todoitem";
 

export default function Todos(props) { 



  return (
    <>
      <div className={`container text-${props.text} `}>
        <div className={`justify-center flex `}>

      <h3 className={`todoitem text-center border-2 border-red-700 w-64 p-3 bg-${props.text==="black"?"gray-400":"black"} justify-items-center rounded-xl`}>
        Todos List</h3> 
        </div>
        
        {props.todos.length===0?"NO TO DO TO DISPLAY":
        props.todos.map((todo) => {
          return (
            
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />  
            /*   this key represent different value of todos like todo.sno = 1 so key = 1 for sno(1) and key =2 for sno(2) */
            
          );
        })
        } 
      </div>
    </>
  );
}
