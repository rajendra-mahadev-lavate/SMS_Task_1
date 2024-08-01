import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Axios.get(
          `http://localhost:8080/api/students/${Number(id)}`
        );
        setName(result.data.studentName); // Ensure this matches your backend property
      } catch (error) {
        console.error("Error fetching student data", error);
        alert("Error fetching student data. Please try again.");
      }
    };

    fetchData();
  }, [id]);

  const updateStudent = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name cannot be empty.");
      return;
    }

    if (window.confirm("Are you sure you want to update this record?")) {
      try {
        // Convert studentId to number if it is a string
        const studentData = { studentName: name }; // Ensure this matches your backend property
        await Axios.put(
          `http://localhost:8080/api/students/${id}`,
          studentData
        );
        alert("Successfully Updated");
        navigate("/student-record"); // Update this to the correct route if necessary
      } catch (error) {
        console.error("Error updating student data", error);
        alert("Error updating student data. Please try again.");
      }
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
