import { useState } from "react";
import studentsData from "./data/data.json";
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import Sidebar from "./components/Sidebar";

import "../src/App.css"



function App() {
  const [cohortFilter, setCohortFilter] = useState("All Students");

  return (
    <>
      <Header />

      <div className="container">
        <Sidebar studentsData={studentsData} setCohortFilter={setCohortFilter} />
        <StudentsList studentsData={studentsData} cohortFilter={cohortFilter} />
      </div>

    </>
  );
}

export default App;

