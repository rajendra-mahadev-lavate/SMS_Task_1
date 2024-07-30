import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/Student/AddStudent";
import UpdateStudent from "./component/Student/UpdateStudent";
import TeacherList from "./component/Teacher/TeacherList";
import AddTeacher from "./component/Teacher/AddTeacher";
import UpdateTeacher from "./component/Teacher/UpdateTeacher";
import MarksList from "./component/Marks/MarksList";
import StudentRecord from "./component/Student/StudentRecord";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <>
      <h1 className="text-warning fw-bold m-3 text-center">
        School Management System
      </h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MarksList />} />
          <Route path="/student-record" element={<StudentRecord />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<UpdateStudent />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/edit-teacher/:id" element={<UpdateTeacher />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
