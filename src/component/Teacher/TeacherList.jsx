import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TeacherList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await Axios.get("http://localhost:8080/api/teachers");
      setData(result.data);
    } catch (error) {
      console.error("Error loading data", error);
      alert("Error loading data. Please try again.");
    }
  };

  const deleteRecord = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await Axios.delete(`http://localhost:8080/api/teachers/${id}`);
        // Remove the deleted record from the state
        setData(data.filter((val) => val.teacherId !== id));
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
        Teacher List
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
              <tr key={val.teacherId}>
                <td>{val.teacherId}</td>
                <td>{val.teacherName}</td>
                <td>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteRecord(val.teacherId)}
                  >
                    <MdDelete />
                  </button>
                  <NavLink to={`/edit-teacher/${val.teacherId}`}>
                    <button className="btn btn-outline-info">
                      <FaEdit />
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeacherList;
