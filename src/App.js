import CohortList from "./components/CohortList.js";
import Header from "./components/Header.js";
import StudentList from "./components/StudentList.js";
import data from './data/data.json';
import { useState } from "react";


function App() {
  const [displayedStudents, setDisplayedtudents] = useState(data);
  

  const getCohorts = (studentList) => {
    let cohortCounter = {}
    studentList.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }

  const filterStudentsByCohort = (cohortCode) => {
    let filteredList = data.filter((student) => {
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayedtudents(filteredList)
    return filteredList
  }

  //console.log(data)
  return (
    <div className="app">
       <Header />
       <section className="main-page-content" />
       <CohortList filterStudentsByCohort={filterStudentsByCohort}
       cohorts={getCohorts(data)}/>
      <StudentList students={displayedStudents} /> 
    </div>
  );
}

export default App;
