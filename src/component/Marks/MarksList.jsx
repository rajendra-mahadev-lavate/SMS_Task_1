import React, { useEffect, useState } from "react";
import Axios from "axios";

const MarksList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await Axios.get("http://localhost:8080/marks");
    setData(result.data);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
          {currentRecords.map((val, index) => (
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
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MarksList;
