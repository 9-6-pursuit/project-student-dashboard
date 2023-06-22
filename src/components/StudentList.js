import StudentCard from "./StudentCard"

export default function StudentList({ selectedCohort, filteredStudents }) {
    const showAllStudents = selectedCohort === null;

    return (
        <div className="student-list">
            {showAllStudents ? (
                <h3>All Students</h3>
            ): (
                <h3>{selectedCohort}</h3>
            )}
            <p>Total Students: <span>{filteredStudents.length}</span></p>
            <div className="student-list">
            {filteredStudents.map((student) => {
                return (
                    <StudentCard key={student.id} student={student}/>
                )
            })}
            </div>
        </div>
        
    )
}