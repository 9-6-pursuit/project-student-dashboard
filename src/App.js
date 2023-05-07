import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Students from "./Components/Students";

function App() {
  return (
    <div className="student-dashboard-container">
      <div className="hearder-row">
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
