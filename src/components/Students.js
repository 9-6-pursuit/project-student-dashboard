import React, { useState } from "react";

function Students({ students, title }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <h2>{title}</h2>
      <p>
        Total Students: <span className="green">{students.length}</span>{" "}
      </p>
      <ul>
        {students.map((student) => {
          const dob = new Date(student.dob);
          const formattedDob = dob.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          return (
            <li key={student.id}>
              <div className="card-container">
                <img
                  src={student.profilePhoto}
                  alt={student.names.preferredName}
                />
                <div>
                  <h3>
                    {student.names.preferredName} {student.names.surname}
                  </h3>
                  <p>{student.username}</p>
                  <p>
                    <span style={{ color: "rgb(91, 148, 111)" }}>
                      Birthday:
                    </span>{" "}
                    {formattedDob}
                  </p>
                  <p onClick={toggleShowMore}>
                    <span style={{ color: "rgb(91, 148, 111)" }}>
                      {showMore ? "Show Less..." : "Show More..."}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Students;
