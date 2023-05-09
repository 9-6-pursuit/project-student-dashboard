import React from "react";
import Header from "./data/components/Header";
import ClassList from "./data/components/ClassList";
import Students from "./data/components/Students";
import studentData from "./data/data.json"


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className = "row">
        <div className="col-4">
          <ClassList students={studentData} />
        </div>
        <div className="col-8">
          <Students students={studentData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
