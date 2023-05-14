import StudentCard from "./StudentCard";
import { useState } from "react";

function StudentsList({ listOfStudents, cohortsList }) {
  function filterStudents() {
    return cohortsList === "AllStudents"
      ? listOfStudents.map((student) => {
          return <StudentCard student={student} />;
        })
      : listOfStudents.filter((student) => 
      student.cohort.cohortCode === cohortsList).map((student) => {
            return <StudentCard student={student}/>
      });
  }

  return (
    <div className="students-list">
      <h1>All Students: {filterStudents().length}</h1>
        {filterStudents()}
    </div>
  );
}

export default StudentsList;
