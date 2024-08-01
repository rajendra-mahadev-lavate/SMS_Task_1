import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const studentRecord = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter a name.");
      return;
    }

    try {
      const studentData = { studentName: name }; // Ensure the property name matches your backend
      await Axios.post("http://localhost:8080/api/students", studentData);
      alert("Successfully Added");
      navigate("/student-record");
    } catch (error) {
      console.error("There was an error adding the student!", error);
      alert("Error adding student. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Add Student</h1>

      <form onSubmit={studentRecord}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark p-4 text-light">
                <div className="col-md-12">
                  <div className="form-group my-3">
                    <label htmlFor="studentName">Enter Your Name</label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group my-3 text-center">
                    <button type="submit" className="btn btn-outline-light">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
