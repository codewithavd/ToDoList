/* import Navbar2 from "./components/Navbar2"; */
/* import Todoitem from "./components/Todoitem"; */
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Converter from "./components/Converter";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("black");
  const [alert, setAlert] = useState(null);
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Darkmode has been enable", "success");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      showAlert("Light has been enable", "success");
      document.body.style.backgroundColor = "white";
    }
    if (text === "black") {
      setText("white");
    } else {
      setText("black");
    }
  };

  const onDelete = (x) => {
    setTodos(
      todos.filter((e) => {
        return e !== x;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      //at first todos is initTodo which is [] length is 0 so sno=1 and if we put one todo in todos then length became [],inserted todo length is 0,1

      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="My TodoList"
          about="About"
          converter="Converter"
          mode={mode}
          text={text}
          toggleMode={toggleMode}
          searchbar={true} //it only supports boolean because searchbar:PropTypes.bool is done
        ></Navbar>
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo
                  text={text}
                  todoWork="Add your todos"
                  desc="Add more details"
                  add="Add Todo"
                  addTodo={addTodo}
                />
                <Todos todos={todos} onDelete={onDelete} text={text} />
              </>
            }
          />
          <Route
            path="/converter"
            element={
              <Converter
                showAlert={showAlert}
                heading="Converter"
                titlex="Write below"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/* <Navbar2 title="Master-key"  mode={mode} toggleMode={toggleMode} text={text}/>
 */
