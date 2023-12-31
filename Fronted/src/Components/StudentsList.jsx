import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentsList() {
  const [students, setStudents] = useState([]);
  const getStudents = () => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete("http://localhost:5000/students/" + id)
      .then((res) => {
        console.log("deleted: ", res.data);
        getStudents();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <h2>Students List</h2>
      <ol>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} {student.location} {student.age} {student.email}{" "}
            <button onClick={() => deleteStudent(student._id)}>delete</button>
            <Link to={`/student/${student._id}/edit/`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default StudentsList;
