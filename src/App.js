import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList"
import students from "./data/data.json"
import CohortList from "./components/CohortList";

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  const handleCohortClick = (cohort) => {
    setSelectedCohort(cohort)
  }

  const filteredStudents = selectedCohort
  ? students.filter((student) => student.cohort.cohortCode === selectedCohort.split(" ").join(""))
  : students;

  return (
    <>
      <Header />
      <div className="layout">
        <div className="cohort-container">
        <CohortList students={students} setSelectedCohort={setSelectedCohort} handleCohortClick={handleCohortClick} selectedCohort={selectedCohort}/>
        </div>
        <div className="student-container">
        <StudentList filteredStudents={filteredStudents} selectedCohort={selectedCohort} />
        </div>
      </div>
      
    </>
  );
}

export default App;
