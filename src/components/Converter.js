import React, {useInsertionEffect, useState} from 'react'
export default function Textform(props) {

    const [text, setText] =useState('enter text here');
    /* const [sty , setSty] = useState({
      color: "blue"
    })
    setSty({
      color: "red"
    }) */
    let myStyle = {
      color: 'blue'

    }
    function upperCase(){
       let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to Upper case","success");
      }
      function lowerCase(){
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to Lower case","success");
      }
      const handelclear = ()=>{
        let newtext = "";
        setText(newtext);
        props.showAlert("cleared","danger");
    }
     /* const handleColorChange = (e) =>{
     /*  let newText = document.getElementById('exampleInputPassword1').style.color = "red"; */
  
     // setText(e.target.value.setStyle("red"));
  // }  
  /* function copyText(event){
    let x ={ d: setText (event.target.value)}
    console.log(x.d)
  } */
  function setting(event){ 
     setText(event.target.value) 
 }
  return (
    <>
    <div className='container'  style ={myStyle}>
      <h1 className="head font-bold text-2xl border-2 rounded-none flex flex-wrap w-32 bg-black">{props.heading}</h1>
      <p className='bg-red-500 text-xl text-white pb-2 w-96'>{props.titlex}</p>
      <div className=" aarnav pb-3 pt-3">   <input type="text" className="form-control py-7 " value={text} onChange={setting} id="exampleInputPassword1"/></div>
     <div className="but p-3">
         <button className="btn btn-primary pt-3 /" onClick={upperCase}>Convert to uppercase</button>
         <button className="btn btn-primary pt-3 mx-1" onClick={lowerCase}>Convert to lowercase</button>
         <button className="btn btn-primary pt-3 mx-1 px-4" onClick={handelclear}>Clear</button>
     {/*     <button* id='col'className="  btn btn-primary pt-3 mx-1" onClick={copyText}>Copy text</button*/}
        
        </div>
       
    </div>
    <div className="container my-2 text-black">
      <h1 className="sum text-xl">Your Text Summary</h1>
      <p className='summary'>{text.split(" ").length} Words and {text.length} Characters.</p>
      <p className='summary'>{0.008*(text.split(" ").length)}   Minutes required to read</p>
    </div>
     
    </>

  )
} 

 