import { useState } from "react";
import StudentDetail from "./StudentDetail";

function StudentCard({ student }) {
  const [showDetail, setShowDetail] = useState(false);
  const [notes, setNotes] = useState([...student.notes]);

  const toggleShowDetail = () => {
    setShowDetail(!showDetail);
  }

  const handleAddNote = (event) => {
    event.preventDefault();

    let name = document.getElementById("commenter").value;
    let comment = document.getElementById("comment").value;
    document.getElementById("note-form").reset();

    setNotes([...notes, {"commenter" : name, "comment" : comment}]);
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
            <p className="show-detail" onClick={toggleShowDetail} >Show Less...</p>
            : 
            <p className="show-detail" onClick={toggleShowDetail} >Show More...</p>
          }
        </div>
        <div id="track">
          <span>{graduation}</span>
        </div>
      </div>
      {showDetail ? 
        <StudentDetail
          student={student}
          notes={notes}
          handleAddNote={handleAddNote}
        /> : <></>}
    </div>
  );
}

export default StudentCard;
