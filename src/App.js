import Header from "./Components/Header";
import StudentsList from "./Components/StudentList";
import data from "./data/data.json"



function App() {
  console.log(data)
  return (
    <div>
     <Header />
     <StudentsList listOfStudents={data}/>
    </div>
  );
}

export default App;
