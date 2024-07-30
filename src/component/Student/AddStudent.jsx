import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");

  const nav = useNavigate();

  const studentRecord = async (e) => {
    e.preventDefault();
    alert("Successfully Added");

    const studentData = { name };

    await Axios.post("http://localhost:3000/Student", studentData);
    nav("/student-record");
  };
  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Add Student</h1>

      <form action="" onSubmit={studentRecord}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark p-4 text-light">
                <div className="col-md-12">
                  <div className="form-group my-3">
                    <label htmlFor="">Enter Your Name</label>
                    <input
                      type="text"
                      name="studentName"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group my-3  m-auto text-center">
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
