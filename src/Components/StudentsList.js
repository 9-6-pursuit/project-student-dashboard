import React from "react";
import StudentCard from "./StudentCard.js";

function StudentsList({ students, selectedCohort }) {
  let title = "All Students";
  let count = 0;

  if (selectedCohort && selectedCohort.code !== "All Students") {
    title = selectedCohort.name;
    count = selectedCohort.students.length;
    students = selectedCohort.students;
  } else {
    count = students.length;
  }

  return (
    <div>
      <h1>{title}</h1>
      <h4>Total Students: <span style={{ color: "#3c7765" }}>{count}</span></h4>
      <div className="student-card">
        {students.map((student) => {
          return <StudentCard key={student.id} student={student} />;
        })}
      </div>
    </div>
  );
}

export default StudentsList;
