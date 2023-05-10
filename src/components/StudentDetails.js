import React from 'react';
import CodeWarsInfo from './CodeWarsInfo';
import ScoresInfo from './ScoresInfo';
import CertificationsInfo from './CertificationsInfo';
import OneOnOneNotes from './OneOnOneNotes';

const StudentDetails = ({ student }) => {
    return (
        <div className="student-details">
          <div className="info-container">
            <CodeWarsInfo student={student} />
            <ScoresInfo student={student} />
            <CertificationsInfo student={student} />
          </div>
          <div className="one-on-one-notes-container">
            <OneOnOneNotes student={student} />
          </div>
        </div>
      );
      
      
};

export default StudentDetails;



