// import Header from "./Components/Header.js"
// import StudentsList from "./Components/StudentsList.js"
// import data from "./data/data.json"; 

// function App() {
//   return (
//       <div>
//       <Header />
//       <StudentsList students={data}/>
//       {/* <h1>This is the Header component</h1> */}
//     </div>
//   );
// }

// export default App;

// import Students from './components/StudentList'


// w opt
import { useState } from "react";
import studentsData from "./data/data.json";
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import Sidebar from "./components/SideBar";

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
