import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const teacherRecord = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name cannot be empty.");
      return;
    }

    try {
      const teacherData = { teacherName: name }; // Ensure this matches your backend property
      await Axios.post("http://localhost:8080/api/teachers", teacherData);
      alert("Teacher successfully added!");
      navigate("/teachers");
    } catch (error) {
      console.error("Error adding teacher", error);
      alert("Error adding teacher. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Add Teacher</h1>

      <form onSubmit={teacherRecord}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <div className="form-group my-3">
                    <label htmlFor="teacherName">Enter Teacher's Name</label>
                    <input
                      type="text"
                      id="teacherName"
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

export default AddTeacher;
