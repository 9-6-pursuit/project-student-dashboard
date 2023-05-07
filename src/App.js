import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Students from "./Components/Students";
import "./Components/Header.css";
import "./Components/PageStructure.css";

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
          <Students />
        </div>
      </div>
    </div>
  );
}

export default App;
