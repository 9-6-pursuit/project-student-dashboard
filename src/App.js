import { useState } from "react";
import Header from  "./Components/Header"
import StudentsList from "./Components/StudentsList";
import data  from "./data/data.json"
import StudentDetail from "./Components/StudentDetail"
import CohortList from "./Components/CohortList"
import "./App.css"

function App() {
  const [displayedStudents, setDisplayedStudents] = useState(data);

  const getCohorts = (studentsList) => {
     let cohortCounter = {}
      studentsList.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
     })
     return Object.keys(cohortCounter)
  }
 const filterStudentsByCohort = (cohortCode) => {
  console.log("filterStudentsByCohort")
  console.log(cohortCode)
   let filteredList = data.filter(student => {
     return student.cohort.cohortCode === cohortCode
   })
   setDisplayedStudents(filteredList)
 }
  // console.log(filterStudentsByCohort("Winter2025"))
  return (
    <div>
      <Header/>
      <section className="main-page-content">
      <CohortList 
      filterStudentsByCohort = {filterStudentsByCohort} 
      cohorts = {getCohorts(data)}/>
      <StudentsList students = {displayedStudents}/> 
      {/* replaced data with displayedStudents */}
      <StudentDetail/>
      </section>
    </div>
  );
}

export default App;
