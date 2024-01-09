import React from "react";
import { useContext } from "react";

export default function Navbar2(props) {
  
  return (
    <>
      <div className="header sticky top-0 ">
        <nav className={`bg-${props.mode}  border-1 rounded-xl p-1 flex`}>
          <ul className={`text-${props.text} space-x-8  `}>
            <li className="float-left"></li>
            <li className="float-left">{props.title}</li>
            <li className="float-left">Home</li>
            <li className="float-left">About</li>
            <li className="float-left">Contant us</li>
          </ul>
          <div
              className={`form-check pl-96 form-switch 
              text-${props.text} `}
            >

              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Darkmode
              </label>
              </div>
        </nav>
      </div>
    </>
  );
}
