import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StudentsList from "./Components/StudentsList";
import "./Components/Header.css";
import "./Components/PageStructure.css";
import "./Components/StudentCard.css";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(data);

  return (
    <div className="student-dashboard-container">
      <div className="header-row">
        <div className="header">
          <Header />
        </div>
      </div>
      <div className="bottom-row">
        <div className="sidebar">
          <Sidebar students={students} setStudents={setStudents} />
        </div>

        <div className="students">
          <StudentsList students={students} setStudents={setStudents} />
        </div>
      </div>
    </div>
  );
}

export default App;