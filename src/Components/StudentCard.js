import React, { useState } from "react";

function StudentCard({ student }) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="student-card">
      <div className="student-info">
        <div className="profile-image">
          <img src={student.profilePhoto} alt="Profile" />
        </div>
        <div className="student-details">
          <h2>{student.names.preferredName} {student.names.surname}</h2>
          <p> {student.username}</p>
          <p><strong>Birthdate:</strong> {student.dob}</p>
        </div>
      </div>
      {showMore && (
        <div>
          <p>CodeWars:</p>
          <ul>
            <li>Total: {student.codewars.current.total}</li>
            <li>Last Week: {student.codewars.current.lastWeek}</li>
            <li>Goal Total: {student.codewars.goal.total}</li>
            <li>Goal Last Week: {student.codewars.goal.lastWeek}</li>
          </ul>
          <p>Certifications:</p>
          <ul>
            <li>Resume: {student.certifications.resume ? "Yes" : "No"}</li>
            <li>LinkedIn: {student.certifications.linkedin ? "Yes" : "No"}</li>
            <li>Github: {student.certifications.github ? "Yes" : "No"}</li>
            <li>Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}</li>
          </ul>
          <p>Notes:</p>
          <ul>
            {student.notes.map((note, index) => (
              <li key={index}>
                <strong>{note.commenter}: </strong>
                {note.comment}
              </li>
            ))}
          </ul>
          <p>Cohort:</p>
          <ul>
            <li>Cohort Code: {student.cohort.cohortCode}</li>
            <li>Cohort Start Date: {student.cohort.cohortStartDate}</li>
            <li>Scores:</li>
            <ul>
              <li>Assignments: {student.cohort.scores.assignments}</li>
              <li>Projects: {student.cohort.scores.projects}</li>
              <li>Assessments: {student.cohort.scores.assessments}</li>
            </ul>
          </ul>
        </div>
      )}
      <a onClick={handleClick}>Show more...</a>
    </div>
  );
}

export default StudentCard;
