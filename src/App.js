import students from "./data/data.json";
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import Cohorts from "./components/Cohorts";
import { useState } from "react";

function App() {
  const [displayedStudents, setDisplayedStudents] = useState([...students]);
  const [cohort, setCohort] = useState("All Students");

  const filterStudents = cohortCode => {
    if (!cohortCode) {
      setDisplayedStudents([...students]);
      setCohort("All Students");
    }
    else {
      let filteredList = students.filter(student => student.cohort.cohortCode === cohortCode);
      setDisplayedStudents(filteredList);
      setCohort(`${cohortCode.substring(0, cohortCode.length - 4)} ${cohortCode.slice(-4)}`);
    }
  }

  const cohortList = [];
  students.forEach(student => {
    if(!cohortList.includes(student.cohort.cohortCode)) {
      cohortList.push(student.cohort.cohortCode);
    }
  });
  cohortList.sort();
  // let ordering = {};
  // let sortOrder = ["Winter", "Fall", "Summer", "Spring"];
  // for (let i = 0; i < cohortList.length; i++) {
  //   ordering[sortOrder[i]] = i;
  // }
  // cohortList.sort((a, b) => (ordering[a.substring(0, a.length - 4)] - ordering[b.substring(0, b.length - 4)]));

  return (
    <main>
      <Header/>
      <section className="main-content">
        <Cohorts cohortList={cohortList} filterStudents={filterStudents} />
        <StudentsList students={displayedStudents} cohort={cohort} />
      </section>
    </main>
  );
}

export default App;
