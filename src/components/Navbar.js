import React from "react";
import PropTypes from "prop-types";
import { Link,NavLink } from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid ">
         <NavLink to="/" className="text-xl navbar-brand">{props.title}</NavLink>
      {/*    link can be also use instead of NavLink but it will make the presence invisible */}
         
         {/*  <a className="navbar-brand " href="/"> //can do this also but page reloads
            {props.title}
          </a> */}
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/converter" className="nav-link">
                  {props.converter}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      To do List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Left-over task
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  
                </ul>
              </li>
            </ul>
           { props.searchbar && 
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="Tsearch"
                placeholder="Search"
                aria-label="Search"
              />
            </form> }

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              {/* //mode === light(first assigned condition) and then if(?) condition is true with assigned then dark else(:) light but I have created text then can simply use it like used it in other options like login,home...etc */}

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
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  searchbar: PropTypes.bool
};
Navbar.defaultProps = {
  title: "Set the title here",
  about: "Set more detail",
};
  