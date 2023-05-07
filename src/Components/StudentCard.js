import React from "react";

function StudentCard({student}) {
  return (
    <div className="student-card">
      <h2>{student.names.preferredName} {student.names.surname}</h2>
      </div>
  );
}

export default StudentCard;
