import Header from './Components/Header.js'
import SideBar from './Components/SideBar.js'
import Students from './Components/Student-List.js'
import studentData from './data/data.json'
import { useState } from "react"
import "./index.js"

function App() {


  const [filterCohort, setFilterCohort] = useState(studentData)

  function getCohorts() {
    return studentData.map((student) => {
      return student.cohort.cohortCode
    })

  }

  function filterStudentsByCohort(cohort) {
    console.log(cohort)

    let filteredData = studentData.filter((student) => {
        return student.cohort.cohortCode === cohort
    })
    setFilterCohort(filteredData)

  }

  return (

  <>
    <Header />
    <div className="page-content">
        <SideBar cohorts={getCohorts()} filterStudentsByCohort={filterStudentsByCohort}/>
        <Students studentData={filterCohort}/>

    </div>

    </>
  );
}

export default App;