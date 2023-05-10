import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import StudentsList from "./components/StudentsList";
import data from "./data/data.json";
import "./index.css"

function App() {
  const [displayedStudents, SetDisplayedStudents] = useState(data);

  const getCohortList = (StudentsList) => {
    let cohortCounter = {}
    StudentsList.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    });
    return Object.keys(cohortCounter)
  }

  const filterStudentByCohort = (cohortCode) => {
    let filteredList = data.filter(student => {
      return student.cohort.cohortCode === cohortCode
    })
    SetDisplayedStudents(filteredList)
  }

  const handlePageRefresh = () => {
    SetDisplayedStudents(data)
  }


  return (
    <div>
      <Header handlePageRefresh={handlePageRefresh}/>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <SideBar 
              cohort={getCohortList(data)} 
              filterStudentByCohort={filterStudentByCohort}
              handlePageRefresh={handlePageRefresh}
            />
          </div>
          <div className="col ms-5">
            <StudentsList data={displayedStudents} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
