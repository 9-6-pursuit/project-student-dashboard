import "./App.css"
import Header from "./components/Header.js";
import StudentsList from "./components/StudentsList.js";
import data from "./data/data.json"
import { useState } from "react";
import CohortList from "./components/CohortList"
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
  return (
    <div className="body">
      <Header />
      <StudentsList students ={data}/>
      <div> 
      <CohortList 
          className="cohort"
          filterStudentsByCohort={filterStudentsByCohort} 
          cohorts={getCohorts(data)}  
        />
      </div>
        
        
      
    </div>
  );
}

export default App;
