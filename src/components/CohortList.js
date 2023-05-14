import React from "react";

function CohortList({ students, setSelectedCohort, formatCohortCode }) {
  // get an array of unique cohort codes from the students
  const cohortCodes = [
    "All Students",
    ...new Set(students.map((student) => student.cohort.cohortCode)),
  ];

  cohortCodes.sort((a, b) => {
    if (a === "All Students") {
      return -1; // leave "All Students" to the front
    } else if (b === "All Students") {
      return 1; // move "All Students" to the front
    } else {
      const aYear = a.slice(-4);
      const aSeason = a.slice(0, -4);
      const bYear = b.slice(-4);
      const bSeason = b.slice(0, -4);
      if (aYear < bYear) {
        return -1;
      } else if (aYear > bYear) {
        return 1;
      } else {
        if (aSeason === "Winter" && bSeason !== "Winter") {
          return -1;
        } else if (aSeason !== "Winter" && bSeason === "Winter") {
          return 1;
        } else if (aSeason === "Spring" && bSeason !== "Spring") {
          return -1;
        } else if (aSeason !== "Spring" && bSeason === "Spring") {
          return 1;
        } else if (aSeason === "Summer" && bSeason !== "Summer") {
          return -1;
        } else if (aSeason !== "Summer" && bSeason === "Summer") {
          return 1;
        } else {
          return 0;
        }
      }
    }
  });

  const handleClick = (cohortCode) => {
    setSelectedCohort(cohortCode);
  };

  return (
    <div className="table-responsive">
      <h2 style={{ paddingLeft: "30px" }}>Choose a Class by Start Date</h2>
      <table className="table">
        {/* <thead>
          <tr>Choose a Class by Start Date</tr>
          </thead> */}
        <tbody className="cohort-list">
          {cohortCodes.map((cohortCode) => {
            if (cohortCode === "All Students") {
              return (
                <tr key={cohortCode} onClick={() => handleClick(null)}>
                  <td>
                    <b>{cohortCode}</b>
                  </td>
                </tr>
              )
            } else {
              return (
                <tr key={cohortCode} onClick={() => handleClick(cohortCode)}>
                  <td>
                    <b>{formatCohortCode(cohortCode)}</b>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
// function CohortList({ students }) {
//   const cohorts = [
//     ...new Set(students.map((student) => student.cohort.cohortCode)),
//   ];
//   cohorts.unshift("All Students");
//   cohorts.sort();

//   return (
//     <div>
//       <h2>Choose a Class by Start Date</h2>
//       <ul>
//         {cohorts.map((cohort) => (
//           <li key={cohort}>{cohort}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default CohortList;
