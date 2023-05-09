import React from "react";
import StudentCard from "./StudentCard.js";

function StudentsList({ students }) {
  const title = students[0] ? students[0].cohort.name : "All Students";
  const count = students.length;

  return (
    <div>
      <h1>{title}</h1>
      <h3>Total Students: <span style={{ color: "#3c7765" }}>{count}</span></h3>
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
