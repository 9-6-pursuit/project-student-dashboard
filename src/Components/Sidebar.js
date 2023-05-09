import React, { useState } from "react";

function Sidebar({ students, setStudents }) {
  const cohortMap = new Map();
  students.forEach((student) => {
    const code = student.cohort.cohortCode;
    const name = code.replace(/([a-zA-Z])(\d)/, "$1 $2"); // add space between letters and first digit
    if (cohortMap.has(code)) {
      cohortMap.get(code).students.push(student);
    } else {
      cohortMap.set(code, { name: name, students: [student] });
    }
  });

  const cohorts = [
    { code: "All Students", name: "All Students", students: students },
    ...Array.from(cohortMap.entries()).map(([code, data]) => ({
      code: code,
      name: data.name,
      students: data.students,
    })),
  ];

  const [selectedCohort, setSelectedCohort] = useState(cohorts[0]);

  const handleCohortClick = (cohort) => {
    setSelectedCohort(cohort);
    setStudents(cohort.students);
  };

  const handleSetAllStudents = () => {
    setStudents(students);
    setSelectedCohort(cohorts[0]);
  };

  return (
    <div>
      <h2 className="SidebarTitle">Choose a Class by Start Date</h2>
      <ul>
        <li>
          <a href="#" onClick={handleSetAllStudents}>
            All Students
          </a>
        </li>
        {cohorts.map((cohort, index) => {
          if (cohort.code === "All Students") {
            return null;
          }
          const count = cohort.students.length;
          const title = count === 1 ? "student" : "students";
          return (
            <li key={index}>
              <a href="#" onClick={() => handleCohortClick(cohort)}>
                {cohort.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

// Use this to show Cohort count
// <li key={index}>
// <a href="#" onClick={() => handleCohortClick(cohort)}>{cohort.name}</a> ({count} {title})
// </li>
