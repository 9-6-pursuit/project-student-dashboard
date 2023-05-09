import React from "react";
import Header from "./data/components/Header";
import ClassList from "./data/components/ClassList";
import Students from "./data/components/Students";
import studentData from "./data/data.json"


function App() {
  return (
    <div>
      <Header />
      <ClassList students={studentData} />
      <Students students={studentData}/>
    </div>
  );
}

export default App;
