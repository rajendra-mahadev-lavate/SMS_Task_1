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
    const result = await Axios.get("http://localhost:3000/Teacher");
    setData(result.data);
  };

  const deleteRecord = async (id) => {
    // alert(id);

    if (window.confirm("Are You Shure!!")) {
      alert("Successfully Deleted...!");
      const result = data.filter((val) => val.id !== id);
      setData(result);

      await Axios.delete(`http://localhost:3000/Teacher/${id}`);
    }
  };
  return (
    <>
      <h1 className="text-center bg-dark text-light p-4 my-3 fw-bold">
        Techer List
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

export default TeacherList;
