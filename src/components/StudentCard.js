import { useState } from "react";
import StudentDetail from "./StudentDetail";

function StudentCard({ student }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = () => {
    setShowDetail(!showDetail);
  }

  let graduation = "";
  if (student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview) {
    graduation = "On Track to Graduate";
  }

  let convertedDate = new Date(student.dob).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"});

  return (
    <div className="student-card">
      <div className="student-info">
        <img src={student.profilePhoto} alt={student.names.preferredName}></img>
        <div id="info">
          <h4 className="info-element">{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h4>
          <em className="info-element">{student.username}</em>
          <p className="info-element"><span>Birthday:</span> {convertedDate}</p>
          {showDetail ?
            <a className="show-detail" onClick={toggleShowDetail} >Show Less...</a>
            : 
            <a className="show-detail" onClick={toggleShowDetail} >Show More...</a>
          }
        </div>
        <div id="track">
          <span>{graduation}</span>
        </div>
      </div>
      {showDetail ? 
        <StudentDetail student={student} /> : <></>}
    </div>
  );
}

export default StudentCard;
