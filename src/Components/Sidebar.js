import React, { useState } from "react";

function Sidebar({ students, setStudents }) {
  const cohortMap = new Map();
  students.forEach((student) => {
    const code = student.cohort.cohortCode;
    const name = `${code.charAt(0).toUpperCase()}${code.slice(1)}`.split(/(?=[A-Z])/).join(" ");
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

  return (
    <div>
      <p>Choose a Class by Start Date</p>
      <ul>
        {cohorts.map((cohort, index) => {
          const count = cohort.students.length;
          const title = count === 1 ? "student" : "students";
          return (
            <li key={index}>
              <a href="#" onClick={() => handleCohortClick(cohort)}>{cohort.name}</a> 
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