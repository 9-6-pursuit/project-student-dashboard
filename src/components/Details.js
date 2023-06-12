import React from "react";

function Details({ student }) {
  const currentTotal = student.codewars.current.total;
  const lastWeek = student.codewars.current.lastWeek;
  const goal = student.codewars.goal.total;
  const percentOfGoal = Math.round(
    (student.codewars.current.total / student.codewars.goal.total) * 100
  );

  return (
    <>
      <div className="container">
        <div>
          <h3>Codewars</h3>
          <p style={{ color: "rgb(91, 148, 111)" }}>
            Current Total:{" "}
            <span style={{ color: "black" }}>{currentTotal}</span>
          </p>
          <p style={{ color: "rgb(91, 148, 111)" }}>
            Last Week: <span style={{ color: "black" }}>{lastWeek}</span>
          </p>
          <p style={{ color: "rgb(91, 148, 111)" }}>
            Goal: <span style={{ color: "black" }}>{goal}</span>
          </p>
          <p style={{ color: "rgb(91, 148, 111)" }}>
            Percent of Goal Achieved:{" "}
            <span style={{ color: "black" }}>{percentOfGoal}%</span>
          </p>
        </div>
        <div className="items">
          <h3>Scores</h3>
          <p>
            Assignments:{" "}
            <span style={{ color: "black" }}>
              {student.cohort.scores.assignments * 100}%
            </span>
          </p>
          <p>
            Projects:{" "}
            <span style={{ color: "black" }}>
              {student.cohort.scores.projects * 100}%
            </span>
          </p>
          <p>
            Assessments:{" "}
            <span style={{ color: "black" }}>
              {student.cohort.scores.assessments * 100}%
            </span>
          </p>
        </div>

        <div className="items">
          <h3>Certifications</h3>
          <p>
            Resume:{" "}
            {student.certifications.resume ? (
              <span style={{ color: "green" }}>&#10003;</span>
            ) : (
              <span style={{ color: "red" }}>&#x2717;</span>
            )}
          </p>
          <p>
            LinkedIn:{" "}
            {student.certifications.linkedin ? (
              <span style={{ color: "green" }}>&#10003;</span>
            ) : (
              <span style={{ color: "red" }}>&#x2717;</span>
            )}
          </p>
          <p>
            Mock Interview:{" "}
            {student.certifications.mockInterview ? (
              <span style={{ color: "green" }}>&#10003;</span>
            ) : (
              <span style={{ color: "red" }}>&#x2717;</span>
            )}
          </p>
          <p>
            Github:{" "}
            {student.certifications.github ? (
              <span style={{ color: "green" }}>&#10003;</span>
            ) : (
              <span style={{ color: "red" }}>&#x2717;</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
