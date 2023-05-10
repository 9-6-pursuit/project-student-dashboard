import { useState } from "react";
import CohortList from "./CohortList.js";
import Header from "./Header.js"
import StudentsList from "./StudentsList.js";
import studentsData from "./data/data.json"
import "./App.css"

function App() {
  const [displayedStudents, setDisplayedStudents] = useState(studentsData);

  const getCohorts = (studentsList) =>{
    let cohortCounter = {}
    studentsList.forEach(student =>{
      cohortCounter[student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }
  
  const filterStudentsbyCohort = (cohortCode) =>{
    let filteredList = studentsData.filter(student =>{
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayedStudents(filteredList)

  }

  return (
    <div>
      <Header />
      <section class = "main-page-content">
        <CohortList 
          filterStudentsbyCohort = {filterStudentsbyCohort} 
          cohorts = {getCohorts(studentsData)} />
        <StudentsList students = {displayedStudents} />
      </section>
    </div>
  );
}

export default App;
