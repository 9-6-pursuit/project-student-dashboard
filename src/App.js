import { useState } from "react";
import Header from "./Components/Header";
import StudentsList from "./Components/StudentList";
import data from "./data/data.json"
import CohortList from "./Components/CohortList";



function App() {
  console.log(data)
const [cohortsList, setCohortsList] = useState("AllStudents")

function getCohortList(cohortsList) {
  setCohortsList(cohortsList)
  console.log("it works.")
}

  return (
    <div>
     <Header />
     <StudentsList listOfStudents={data} cohortsList={cohortsList}/>
     <CohortList getCohortList={getCohortList}/>
    </div>
  );
}

export default App;
