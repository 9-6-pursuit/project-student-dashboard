import "./StudentsList.css";
import StudentCard from "./StudentCard";

function StudentsList({ studentsData, cohortFilter }) {
  
  const filterStudents = (students, filter) => {
    if (filter === "All Students") {
      return students;
    }

    return students.filter((student) => {
      const formatCohortCode = `${student.cohort.cohortCode.slice(0, -4)} ${student.cohort.cohortCode.slice(-4)}`;
      return formatCohortCode === filter;
    });
  };

  const filteredStudents = filterStudents(studentsData, cohortFilter);

  return (
    <div className="students-list">
      <div className="students-title">
        <h2 className="cabin-fonts">{cohortFilter}</h2>
        <p>
          Total Students:{" "}
          <span className="primary-text-color">{filteredStudents.length}</span>
        </p>
      </div>

      {filteredStudents.map((studentData) => {
        return (
          <StudentCard key={studentData.id} studentsData={studentData} />
        );
      })}
    </div>
  );
}

export default StudentsList;