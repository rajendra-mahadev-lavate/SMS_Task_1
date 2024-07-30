import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { studentId } = useParams();
  const [name, setName] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(
        `http://localhost:3000/Student/${studentId}`
      );
      setName(result.data.name);
    };
    
    fetchData();
  }, [studentId]);

  const updateStudent = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      alert("Successfully Updated");

      const studentData = { name };
      await Axios.put(`http://localhost:3000/Student/${studentId}`, studentData);

      nav("/userData");
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Update Student</h1>

      <form onSubmit={updateStudent}>
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
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group my-3 m-auto text-center">
                    <button type="submit" className="btn btn-outline-light">
                      Update
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

export default UpdateStudent;
