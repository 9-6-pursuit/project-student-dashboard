import React from "react";

function Details({students}) {
    // let grades = students.map((student) => {
    //     student.cohort.scores.assignments
    // })
  return (
    <>
      <div className="container">
        <div>
          <h3>Codewars</h3>
          <p style={{color: "rgb(91, 148, 111)" }} >Current Total: </p>
          <p style={{color: "rgb(91, 148, 111)" }}>LastWeek: </p>
          <p style={{color: "rgb(91, 148, 111)" }}>Goal: </p>
          <p style={{color: "rgb(91, 148, 111)" }}>Percent of Goal Achieved: </p>
        </div>
        <div className="items">
          <h3>Scores</h3>
          <p>Assignments: </p>
          <p>Projects: </p>
          <p>Assessments: </p>
        </div>
        <div className="items">
          <h3>Certifications</h3>
          <p>Resume: </p>
          <p>LinkedIn: </p>
          <p>Mock Interview: </p>
          <p>Github: </p>
        </div>
      </div>
    </>
  );
}

export default Details;
