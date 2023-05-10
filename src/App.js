import { useState } from "react";

import Header from "./Components/Header.js"
import StudentsList from "./Components/StudentsList.js";
import CohortsList from "./Components/CohortsList.js"
import studentsData from "./data/data.json"
import "./App.css"


function App() {
const [displayedStudents, setDisplayedStudents] = useState(studentsData);

const getCohorts = (studentsList) => {
  let cohortCounter = {}
  studentsData.forEach(student => {
    cohortCounter[student.cohort.cohortCode] = true
  })
  return Object.keys(cohortCounter)
}


const filterByCohort = (cohortCode) => {
  let filteredList = studentsData.filter(student => {
    return student.cohort.cohortCode === cohortCode
  })
  setDisplayedStudents(filteredList)

}
// console.log(filterByCohort("winter2025"))

  return (
    <div className="webpage">
     <Header />
     <section className="main-page-content">
     <CohortsList cohorts={getCohorts(studentsData)}/>
     <StudentsList students={displayedStudents}/>
     </section>
    </div>
  );
}

export default App;
