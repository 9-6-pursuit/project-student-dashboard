import React, { useState } from "react";
import Details from "./Details";

function Students({ students, title, isOnTrackToGraduate }) {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (studentId) => {
    setShowMore((prevShowMoreMap) => ({
      ...prevShowMoreMap,
      [studentId]: !prevShowMoreMap[studentId],
    }));
  };

  return (
    <>
      <h2>{title}</h2>
      <p>
        Total Students: <span className="green">{students.length}</span>{" "}
      </p>
      <div>
        <ul>
          {students.map((student) => {
            const dob = new Date(student.dob);
            const formattedDob = dob.toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });
            const isShowMore = showMore[student.id] || false;

            return (
              <li key={student.id}>
                <div className="card-container">
                  <img
                    src={student.profilePhoto}
                    alt={student.names.preferredName}
                  />
                  <div className="card-body">
                    {/* {isOnTrackToGraduate(student)} */}
                    <h3 className="card-title">
                      {student.names.preferredName} {student.names.surname}
                    </h3>
                    {/* {isOnTrackToGraduate(student)} */}
                    <p className="card-text">{student.username}</p>
                    <p className="card-text">
                      <span style={{ color: "rgb(91, 148, 111)" }}>
                        Birthday:
                      </span>{" "}
                      {formattedDob}
                    </p>
                    {/* {isOnTrackToGraduate(student)} */}
                    <p
                      className="card-text"
                      onClick={() => toggleShowMore(student.id)}
                    >
                      <span style={{ color: "rgb(91, 148, 111)" }}>
                        {isShowMore ? "Show Less..." : "Show More..."}
                      </span>
                    </p>
                    {/* {isOnTrackToGraduate(student)} */}
                  </div>
                </div>
                {isShowMore && <Details key={student.id} student={student} />}
              </li>
            );
          })}
        </ul>
        {/* <div>{isOnTrackToGraduate}</div> */}
      </div>
    </>
  );
}

export default Students;
