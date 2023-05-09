import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StudentsList from "./Components/StudentsList";
import "./Components/Header.css";
import "./Components/PageStructure.css";
import "./Components/StudentCard.css";
import "./Components/Sidebar.css";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(data);
  const [cohorts, setCohorts] = useState([]);

  // Create a set of unique cohort codes
  const cohortSet = new Set(data.map(student => student.cohort.cohortCode));

  // Create an array of unique cohorts with human-readable names
  const cohortList = [{ code: "All Students", name: "All Students" }];
  for (const code of cohortSet) {
    const name = code.replace(/([a-zA-Z])(\d)/, "$1 $2"); // add space between letters and first digit
    cohortList.push({ code, name });
  }

  // Sort the cohorts by date (in ascending order), All Students at the top
  const sortedCohorts = [...cohortList].sort((a, b) => {
    if (a.code === "All Students") {
      return -1; // "All Students" always comes first
    } else if (b.code === "All Students") {
      return 1; // "All Students" always comes first
    } else {
      return a.code.localeCompare(b.code);
    }
  });

  const handleCohortSelect = (cohortCode) => {
    if (cohortCode === "All Students") {
      setStudents(data);
    } else {
      const filteredStudents = data.filter(student => student.cohort.cohortCode === cohortCode);
      setStudents(filteredStudents);
    }
  };

  return (
    <div className="student-dashboard-container">
      <div className="header-row">
        <div className="header">
          <Header />
        </div>
      </div>
      <div className="bottom-row">
        <div className="sidebar">
          <Sidebar cohorts={sortedCohorts} onCohortSelect={handleCohortSelect} />
        </div>
        <div className="students">
          <StudentsList students={students} selectedCohort={null} />
        </div>
      </div>
    </div>
  );
}

export default App;
