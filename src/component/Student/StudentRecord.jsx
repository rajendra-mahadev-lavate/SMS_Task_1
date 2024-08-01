import Axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentRecord = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await Axios.get("http://localhost:8080/api/students");
      setData(result.data);
    } catch (error) {
      console.error("Error loading data", error);
      alert("Error loading student records. Please try again.");
    }
  };

  const deleteRecord = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await Axios.delete(`http://localhost:8080/api/students/${id}`);
        setData(data.filter((val) => val.studentId !== id));
        alert("Successfully Deleted!");
      } catch (error) {
        console.error("Error deleting record", error);
        alert("Error deleting record. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center bg-dark text-light p-4 my-3 fw-bold">
        Student Records
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr key={val.studentId}>
                <td>{val.studentId}</td>
                <td>{val.studentName}</td>
                <td>
                  <button
                    className="btn btn-outline-danger mx-1"
                    onClick={() => deleteRecord(val.studentId)}
                  >
                    <MdDelete />
                  </button>
                  <NavLink
                    to={`/edit-student/${val.studentId}`}
                    className="btn btn-outline-info mx-1"
                  >
                    <FaEdit />
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentRecord;
