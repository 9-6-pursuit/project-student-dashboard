import data from "./data/data.json";
import CohortList from "./Components/CohortList";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
import './App.css'
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState('All Students')
  const [students, setStudents] = useState(data)
  return (
    <main>
      <Header />
<div className="container">
      <div className="main-page-content mt-3">
        <div className="">
          <CohortList students={data} setHeading={setHeading} setStudents={setStudents}/>
        </div>
        <div className="">
          <StudentList students={students} heading={heading}/>
        </div>

    </div>

</div>

    </main>
  );
}

export default App;
