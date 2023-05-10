import { useState } from "react";
import "./StudentCard.css";
import StudentDetails from "./StudentDetails";

function StudentCard({ student }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="student-card">
      <img src={student.profilePhoto}></img>
      <div className="student-info-container">
        <h2>
          {student.names.preferredName} {student.names.surname}
        </h2>
        {showMore ? (
          <div>
            <a className="show-more-button" onClick={toggleShowMore}>
              Show Less
            </a>
            <StudentDetails student={student} />
          </div>
        ) : (
          <a className="show-more-button" onClick={toggleShowMore}>
            Show More
          </a>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
