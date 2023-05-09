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

  // const onTrackStatus = isOnTrackToGraduate(student) ? (
  //   <div>
  //     <p>On Track to Graduate</p>
  //   </div>
  // ) : null;

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
            // const onTrackStatus = isOnTrackToGraduate(student) ? (
            //   <div>
            //     <p>On Track to Graduate</p>
            //   </div>
            // ) : null;

            return (
              <li key={student.id}>
                <div className="card-container">
                  <img
                    src={student.profilePhoto}
                    alt={student.names.preferredName}
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      {student.names.preferredName} {student.names.surname}
                    </h3>
                    <p className="card-text">{student.username}</p>
                    <p className="card-text">
                      <span style={{ color: "rgb(91, 148, 111)" }}>
                        Birthday:
                      </span>{" "}
                      {formattedDob}
                    </p>
                    <p
                      className="card-text"
                      onClick={() => toggleShowMore(student.id)}
                    >
                      <span style={{ color: "rgb(91, 148, 111)" }}>
                        {isShowMore ? "Show Less..." : "Show More..."}
                      </span>
                    </p>
                    {isShowMore && <Details />}
                  </div>
                  <div className="box">
                    
                    <div>
                      {isOnTrackToGraduate}
                    </div>
                    
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Students;
