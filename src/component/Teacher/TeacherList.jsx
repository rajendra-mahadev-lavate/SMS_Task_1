import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
            <tr key={val.teacherId}>
              <td>{val.teacherId}</td>
              <td>{val.teacherName}</td>
              <td>
                <button
                  className="btn btn-outline-danger mx-4"
                  onClick={() => deleteRecord(val.teacherId)}
                >
                  <MdDelete />
                </button>
                <button className="btn btn-outline-info">
                  <NavLink to={`/edit-teacher/${val.teacherId}`}>
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

export default TeacherList;
