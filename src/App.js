import { useState } from "react";
import data from "./data/data.json";

import CohortList from "./components/CohortList";
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";

import "./App.css"

function App() {

  const [displayedStudents, setDisplayedStudents] = useState(data)

  const getCohorts = (studentsList) => {
    let cohortCounter = {}
    studentsList.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    });
    return Object.keys(cohortCounter)
  }


  const filterStudentsByCohort = (cohortCode) => {
    let filteredList = data.filter(student => {
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayedStudents(filteredList)
    return filteredList
  }

  // console.log(filterStudentsByCohort("Winter2025"))

  return (
    <div>
      <Header />
      <section className="main-page-content" >
        <CohortList 
          className="cohort"
          filterStudentsByCohort={filterStudentsByCohort} 
          cohorts={getCohorts(data)}  
        />
        <StudentsList students={displayedStudents}/>
      </section>
      
    </div>
  );
}

export default App;
