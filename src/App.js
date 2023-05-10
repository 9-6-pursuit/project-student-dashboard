import "./App.css"
import Header from "./components/Header.js";
import StudentsList from "./components/StudentsList.js";
import data from "./data/data.json"
function App() {
  return (
    <div className="body">
      <Header />
      <StudentsList students ={data}/>
    </div>
  );
}

export default App;
