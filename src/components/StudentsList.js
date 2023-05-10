import StudentCard from "./StudentCard";

function StudentsList({ students, cohort }) {
    return (
      <div className="students-list">
        <h3>{cohort}</h3>
        <h5>Total Students: <span>{students.length}</span></h5>
        {students.map(student =>
            <StudentCard key={student.id} student={student} />
        )}
      </div>
    );
}

export default StudentsList;
