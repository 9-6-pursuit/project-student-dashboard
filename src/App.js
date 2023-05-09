import { React, useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import Students from "./components/Students";
import CohortList from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState(data);
  console.log(data);
  const [selectedCohort, setSelectedCohort] = useState(null);

  function formatCohortCode(cohortCode) {
    const year = cohortCode.slice(-4);
    const season = cohortCode.slice(0, -4);
    const seasonMap = {
      Winter: "Winter",
      Spring: "Spring",
      Summer: "Summer",
      Fall: "Fall",
    };
    return `${seasonMap[season]} ${year}`;
  }

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-8">
          <CohortList
            formatCohortCode={formatCohortCode}
            students={students}
            setSelectedCohort={setSelectedCohort}
          />
        </div>
        <div className="col-lg-4">
          <Students
            students={students.filter(
              (student) =>
                selectedCohort === null ||
                student.cohort.cohortCode === selectedCohort
            )}
            selectedCohort={selectedCohort}
            formatCohortCode={formatCohortCode}
            title={
              selectedCohort
                ? formatCohortCode(selectedCohort)
                : "All Students"
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
