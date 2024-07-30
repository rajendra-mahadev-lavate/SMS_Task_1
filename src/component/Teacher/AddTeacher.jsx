import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [name, setName] = useState("");

  const nav = useNavigate();

  const teacherRecord = async (e) => {
    e.preventDefault();
    alert();

    const TeacherData = { name };

    await Axios.post("http://localhost:3000/Teacher", TeacherData);
    nav("/student-record");
  };
  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Add Teacher</h1>

      <form action="" onSubmit={teacherRecord}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark p-4 text-light">
                <div className="col-md-12">
                  <div className="form-group my-3">
                    <label htmlFor="">Enter Your Name</label>
                    <input
                      type="text"
                      name="teacherName"
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

export default AddTeacher;
