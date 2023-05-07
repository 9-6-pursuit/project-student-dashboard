import React from "react";
import StudentCard from "./StudentCard.js";

function StudentsList({students}) {
  return (
    <div className="student-card">
      {students.map((student) => {
        return (
        <StudentCard student={student} />
         )
      })}
    </div>
  );
}

export default StudentsList;
