import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTeacher = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Axios.get(
          `http://localhost:8080/api/teachers/${id}`
        );
        setName(result.data.teacherName); // Ensure this matches your backend property
      } catch (error) {
        console.error("Error fetching teacher data", error);
        alert("Error fetching teacher data. Please try again.");
      }
    };

    fetchData();
  }, [id]);

  const updateRecord = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name cannot be empty.");
      return;
    }

    if (window.confirm("Are you sure you want to update this record?")) {
      try {
        const teacherData = { teacherName: name }; // Ensure this matches your backend property
        await Axios.put(
          `http://localhost:8080/api/teachers/${id}`,
          teacherData
        );
        alert("Successfully Updated");
        navigate("/teachers"); // Update this to the correct route if necessary
      } catch (error) {
        console.error("Error updating teacher data", error);
        alert("Error updating teacher data. Please try again.");
      }
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Update Teacher</h1>

      <form onSubmit={updateRecord}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row bg-dark p-4 text-light">
                <div className="col-md-12">
                  <div className="form-group my-3">
                    <label htmlFor="teacherName">Enter Your Name</label>
                    <input
                      type="text"
                      id="teacherName"
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

export default UpdateTeacher;
