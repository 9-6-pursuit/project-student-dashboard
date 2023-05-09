import React from "react";
import StudentCard from "./StudentCard.js";

function StudentsList({ students }) {
  let title = "All Students";
  let count = 0;

  if (students.length > 0 && students[0].cohort) {
    title = students[0].cohort.cohortCode;
    count = students.length;
  }

  return (
    <div>
      <h1>{title}</h1>
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
