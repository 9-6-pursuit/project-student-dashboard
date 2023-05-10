import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import StudentsList from "./Components/StudentsList";
import students from "./data/data.json";
import "./App.css"
import { useState } from "react";


function App() {
  const [displayedStudents, setDisplayedStudents] = useState(students);

  const getCohorts = (studentsList) => {
    let cohortCounter = {}
    studentsList.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }

  const filterStudentsByCohort = (cohortCode) => {
    let filteredList = students.filter(student => {
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayedStudents(filteredList)
  }

  return (
    <div>
      <Header />
      <section className="main-page-content">
        <CohortList 
          filterStudentsByCohort = {filterStudentsByCohort} 
          cohorts = {getCohorts(students)}
        />
        <StudentsList students={displayedStudents}/>
      </section>
    </div>
  );
}

export default App;
