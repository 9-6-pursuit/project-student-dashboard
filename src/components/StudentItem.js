import React, { useState } from 'react';
import StudentDetails from './StudentDetails';

const StudentItem = ({ student }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className="student-item">
      <div className="student-basic-info">
        <img src={student.profilePhoto} alt={`${student.names.preferredName} ${student.names.surname}`} />
        <div className="student-text">
            <p className="student-name">{student.names.preferredName} {student.names.surname}</p>
            <p>{student.username}</p>
            <p><span className="student-birthday-label">Birthday:</span> {new Date(student.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <button onClick={toggleDetails}>{detailsOpen ? 'Show Less...' : 'Show More...'}</button>
        </div>
      </div>
      {detailsOpen && <StudentDetails student={student} />}
    </div>
);


};

export default StudentItem;

