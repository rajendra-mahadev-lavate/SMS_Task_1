import React, { useEffect, useState } from "react";
import Axios from "axios";
const MarksList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await Axios.get("http://localhost:3000/MarksList");
    setData(result.data);
  };

  return (
    <>
      <h1 className="text-center bg-dark text-light p-4 my-3 fw-bold">
        Mark List
      </h1>
      <table className="table table-bordered table-responsive table-hover">
        <thead>
          <tr>
            <th>StudentId</th>
            <th>StudentName</th>
            <th>TeacherName</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td>{val.studentId}</td>
              <td>{val.studentName}</td>
              <td>{val.teacherName}</td>
              <td>{val.subject}</td>
              <td>{val.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MarksList;
