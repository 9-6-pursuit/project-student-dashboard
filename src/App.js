import { React, useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import Students from "./components/Students";
import CohortList from "./components/StudentTable";

function App() {
  const [students] = useState(data);
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

  function isOnTrackToGraduate(student) {
    if (
      student.certifications.resume === true &&
      student.certifications.linkedin === true &&
      student.certifications.github === true &&
      student.certifications.mockInterview === true &&
      student.codewars.lastWeek >= 600
    )
      return (
        <div>
          <p>On Track to Graduate</p>
        </div>
      );
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
        <div className="col-md-4 custom">
          <Students
            students={students.filter(
              (student) =>
                selectedCohort === null ||
                student.cohort.cohortCode === selectedCohort
            )}
            selectedCohort={selectedCohort}
            formatCohortCode={formatCohortCode}
            title={
              selectedCohort ? formatCohortCode(selectedCohort) : "All Students"
            }
            isOnTrackToGraduate={isOnTrackToGraduate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
