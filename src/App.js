import { useState } from "react";
import StudentList from "./data/components/StudentsList";
import Header from "./data/components/header";
import data from "./data/data.json"
import "/Users/win/labs/project-student-dashboard/src/index.css";
import CohortList from "/Users/win/labs/project-student-dashboard/src/data/components/CohortList.js"
import "./App.css"

function App() {
  const [displayStudents, setDisplayStudents] = useState(data)

  const getCohorts = (StudentList) => {
    let cohortCounter = {}
    data.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }

  const filterStudentsByCohort = (cohortCode) => {
    let filteredList = data.filter(student => {
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayStudents(filteredList)
    return filteredList
  }


  return (
    <>
      <div class="p-3 mb-2 bg-success text-white header">
        <Header/>
      </div>
      <section class="main-page-content pt-5">
        <div>
          <CohortList filterStudentsByCohort={filterStudentsByCohort} cohorts={getCohorts(data)}/>
        </div>
        <div>
          <StudentList students={displayStudents}/>
        </div>
      </section>
    </>
  );
}

export default App;
