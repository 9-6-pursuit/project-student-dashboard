import Header from "./Components/Header";
import StudentLists from "./Components/StudentLists"
import Students from "./data/data.json"
import { useState } from "react";
import "./app.css"
import Cohorts from "./Components/Cohorts";

function App() {
  const [StudentData, SetStudentData] = useState(Students)
  const [CohortData, SetCohortData] = useState(Students)
  
  const CohortDatas = []
  CohortData.forEach((ele) => {
      CohortDatas.push(ele.cohort.cohortCode)
  })
  const CohortSemesters = CohortDatas.filter((ele,i,arr) =>{
    return arr.indexOf(ele) === i
  })
  function toggleStudentData(cohort) {
    SetStudentData(CohortData.filter(ele => ele.cohort.cohortCode === cohort))
  }
  function resetStudentData() {
    SetStudentData(Students)
    SetCohortData(Students)
  }

  
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row justify-content-around">
          <Cohorts 
          CohortSemesters={CohortSemesters}
          toggleStudentData={toggleStudentData}
          resetStudentData={resetStudentData}
          />
          <StudentLists Students={StudentData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
