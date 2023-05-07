import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StudentsList from "./Components/StudentsList";
import "./Components/Header.css";
import "./Components/PageStructure.css";
import "./Components/StudentCard.css"
import data from "./data/data.json"


function App() {
  return (
    <div className="student-dashboard-container">
      <div className="header-row">
        <div className="header">
          <Header />
        </div>
      </div>
      <div className="bottom-row">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="students">
          <StudentsList students={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
