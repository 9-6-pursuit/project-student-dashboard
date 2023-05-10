import { useState } from "react";


import CohortList from "./Components/CohortList.js";
import Header from  "./Components/Header.js";
import StudentsList from "./Components/StudentsList.js";
import students from "./data/data.json";

import "./App.css"


function App() {
  const [displayedStudents, setdisplayedStudents] = useState(students);

  const getCohorts = (studentsList) => {
    let cohortCounter = {}
    studentsList.forEach(student => {
cohortCounter [student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }
  
  
  const filterStudentsByCohort = (cohortCode) => {
    let filteredList = students.filter(student => {
return student.cohort.cohortCode === cohortCode
    })
    setdisplayedStudents(filteredList)
    return filteredList
  }
  
  
  return (
    <div>
      <Header />
      <section class="main-page-content">
      <CohortList 
      filterStudentsByCohort= {filterStudentsByCohort} 
      cohorts ={getCohorts(students)}/>
      <StudentsList students={displayedStudents}/>
      </section>
    </div>
  );
}

export default App;
