import React from "react";
import StudentCard from "./StudentCard.js";


function StudentsList({ students }) {
  const title = students[0] ? students[0].cohort.cohortCode : "All Students";
  const count = students.length;

  return (
    <div>
      <h1>All Students</h1>
      <h3>{title}</h3>
      <h4>Total Students: <span style={{ color: "#3c7765" }}>{count}</span></h4>
      <div className="student-card">
        {students.map((student) => {
          return (
            <StudentCard key={student.id} student={student} />
          );
        })}
      </div>
    </div>
  );
}

export default StudentsList;

