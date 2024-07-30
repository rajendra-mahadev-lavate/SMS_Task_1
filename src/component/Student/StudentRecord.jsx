import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudentRecord = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await Axios.get("http://localhost:3000/Student");
    setData(result.data);
  };

  // console.log(data);

  const deleteRecord = async (id) => {
    // alert(id);

    if (window.confirm("Are You Shure!!")) {
      alert("Successfully Deleted...!");
      const result = data.filter((val) => val.id !== id);
      setData(result);

      await Axios.delete(`http://localhost:3000/Student/${id}`);
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
          {data.map((val, index) => (
            <tr key={index}>
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
                  <NavLink to={`/edit-student/${val.studentId}`}>
                    <FaEdit />{" "}
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
