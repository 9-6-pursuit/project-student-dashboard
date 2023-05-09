import React from "react";

function Details() {
  return (
    <>
      <div className="container">
        <div classname="items">
          <h3>Codewars</h3>
          <p>Current Total: </p>
          <p>LastWeek: </p>
          <p>Goal: </p>
          <p>Percent of Goal Achieved: </p>
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
