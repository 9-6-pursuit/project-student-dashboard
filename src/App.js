import Header from './header.js'
import SideBar from './sidebar.js'
import Students from './students.js'
import studentData from './data/data.json'
import { useState } from "react"




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
