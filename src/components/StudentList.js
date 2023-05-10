import React from 'react';
import StudentItem from './StudentItem';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {/* <h2>{students.length} Students</h2> */}
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;

