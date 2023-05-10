import CohortList from "./components/CohortList";
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import data from "./data/data.json";

import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <section class="main-page-content" >
        <CohortList />
        <StudentsList students={data}/>
      </section>
      
    </div>
  );
}

export default App;
