import React from "react";

function Students({ students }) {
  return (
    <>
      <h2>All Students</h2>
      <p>
        Total Students: <span className="green">{students.length}</span>{" "}
      </p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
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
                  <button>
                    <span style={{ color: "rgb(91, 148, 111)" }}>
                      Show more...
                    </span>
                  </button>
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
