import Axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
    <>
      <h1 className="text-center bg-dark text-light p-4 my-3 fw-bold">
        Student Records
      </h1>
      <table className="table table-bordered table-responsive table-hover">
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
                  className="btn btn-outline-danger mx-4"
                  onClick={() => deleteRecord(val.studentId)}
                >
                  <MdDelete />
                </button>
                <button className="btn btn-outline-info">
                  <NavLink
                    to={`/edit-student/${val.studentId}`}
                    className="text-light"
                  >
                    <FaEdit />
                  </NavLink>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentRecord;
