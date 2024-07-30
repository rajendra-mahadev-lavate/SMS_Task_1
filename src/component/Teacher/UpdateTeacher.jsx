import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTeacher = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { teacherId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(
        `http://localhost:3000/Teacher/${teacherId}`
      );
      setName(result.data.name);
    };

    fetchData();
  }, [teacherId]);

  const updateRecord = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      alert("Successfully Updated");

      const teacherData = { name };
      await Axios.put(
        `http://localhost:3000/Teacher/${teacherId}`,
        teacherData
      );

      navigate("/userData");
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold text-info p-2 my-3">Update Teacher</h1>

      <form action="" onSubmit={updateRecord}>
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

                  <div className="form-group my-3 m-auto text-center">
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

export default UpdateTeacher;
