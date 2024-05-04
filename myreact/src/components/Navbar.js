import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "dark"
          ? "dark"
          : props.mode === "light"
          ? "light"
          : props.mode === "blue"
          ? "dark"
          : props.mode === "green"
          ? "dark"
          : "dark"
      } `}
      style={{
        backgroundColor:
          props.mode === "dark"
            ? "#212529"
            : props.mode === "light"
            ? "white"
            : props.mode === "blue"
            ? "#001829"
            : props.mode === "green"
            ? "#0c2418"
            : "white",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" herf="#">
          {props.title}
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" herf="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" to="/About">
                {props.about}
              </a>
            </li> */}
          </ul>
          <div className="btn-group mx-1 my-1" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={props.clickLight}
              className="btn btn-primary"
            >
              Default
            </button>
            <button
              type="button"
              onClick={props.clickDark}
              className="btn btn-primary"
            >
              Dark
            </button>
            <button
              type="button"
              onClick={props.clickBlue}
              className="btn btn-primary"
            >
              Blue
            </button>
            <button
              type="button"
              onClick={props.clickGreen}
              className="btn btn-primary"
            >
              Green
            </button>
          </div>
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2`}
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor:
                  props.mode === "dark"
                    ? "#252525"
                    : props.mode === "light"
                    ? "white"
                    : props.mode === "blue"
                    ? "#3e6680"
                    : props.mode === "green"
                    ? "#2d4d3a"
                    :"white",
                color:
                  props.mode === "dark"
                    ? "white"
                    : props.mode === "light"
                    ? "black"
                    : props.mode === "blue"
                    ? "white"
                    : props.mode === "green"
                    ? "white"
                    : "black",
              }}
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
  about: "set about here",
};
