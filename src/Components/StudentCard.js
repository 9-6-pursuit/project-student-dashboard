import React, { useState } from "react";

function StudentCard({ student }) {
  const [showMore, setShowMore] = useState(false);
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [notes, setNotes] = useState(student.notes);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      commenter,
      comment,
    };
    setNotes([...notes, newNote]);
    setCommenter("");
    setComment("");
  };

  return (
    <div
      className="student-card-container"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div
        className="student-card"
        style={{ border: "2px solid #3c7765", borderRadius: "1px" }}
      >
        <div className="student-info">
          <div className="profile-image">
            <img src={student.profilePhoto} alt="Profile" />
          </div>
          <div className="student-details">
            <strong>
              {student.names.preferredName} {student.names.surname}
            </strong>
            <p> {student.username}</p>
            <p>
              <span style={{ color: "#3c7765" }}>Birthdate:</span> {student.dob}
            </p>
          </div>
        </div>
        {showMore && (
          <div>
            <strong>
              <p>CodeWars:</p>
            </strong>
            <ul>
              <li>Total: {student.codewars.current.total}</li>
              <li>Last Week: {student.codewars.current.lastWeek}</li>
              <li>Goal Total: {student.codewars.goal.total}</li>
              <li>Goal Last Week: {student.codewars.goal.lastWeek}</li>
            </ul>
            <strong>
              <p>Certifications:</p>
            </strong>
            <ul>
              <li>Resume: {student.certifications.resume ? "Yes" : "No"}</li>
              <li>
                LinkedIn: {student.certifications.linkedin ? "Yes" : "No"}
              </li>
              <li>Github: {student.certifications.github ? "Yes" : "No"}</li>
              <li>
                Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}
              </li>
            </ul>
            <strong>
              <p className="1-on-1-notes">Notes:</p>
            </strong>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>
                  <strong>{note.commenter}: </strong>
                  {note.comment}
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <h3>Add a note</h3>
              <label>
                Commenter:
                <input
                  type="text"
                  value={commenter}
                  onChange={(e) => setCommenter(e.target.value)}
                />
              </label>
              <label>
                Comment:
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <p></p>
            <a href="" onClick={handleClick} style={{ color: "#3c7765" }}>
              Show less...
            </a>
          </div>
        )}
        {!showMore && (
          <a href="" onClick={handleClick} style={{ color: "#3c7765" }}>
            Show more...
          </a>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
