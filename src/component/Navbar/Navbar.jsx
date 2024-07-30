import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-light fw-bold text-center">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light fw-bold mx-5" to="/">
                MarkList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light fw-bold mx-5"
                to="/student-record"
              >
                StudentRecord
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-light fw-bold mx-5"
                to="/add-student"
              >
                Add Student
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-light fw-bold mx-5"
                to="/teachers"
              >
                Teachers Record
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-light fw-bold mx-5"
                to="/add-teacher"
              >
                Add Teacher
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
