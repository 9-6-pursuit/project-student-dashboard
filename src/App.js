import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import data from "./data/data.json"

function App() {
  return (
    <div>
      <Header />
      <StudentsList students={data}/>
      
    </div>
  );
}

export default App;
