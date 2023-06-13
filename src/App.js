import { useState } from "react";
import CohortList from "./components/CohortList.js";
import Header from "./components/Header.js"
import StudentsList from "./components/StudentsList.js";
import studentsData from "./data/data.json"
import "./App.css"

function App() {
  const [displayedStudents, setDisplayedStudents] = useState(studentsData);
  const [dahCohort, setDahCohort] = useState("All Students")

  function resetStudentView(){
    setDahCohort("All Students")
    setDisplayedStudents(()=>[...studentsData])
  }

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
        <aside class = "cohort-component">
        <CohortList 
          filterStudentsbyCohort = {filterStudentsbyCohort} 
          cohorts = {getCohorts(studentsData)} 
          resetStudentView = {resetStudentView} />

        </aside>
        <StudentsList students = {displayedStudents} dahCohort = {dahCohort} />
      </section>
    </div>
  );
}

export default App;
