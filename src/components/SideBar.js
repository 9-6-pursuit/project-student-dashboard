// import StudentCard from "./StudentCard.js"

// function StudentCard({student}) {
// 	return (
// 		<div className="student-card">
//             <h2>{student.names.preferredName} {student.names.surname}</h2>
//             <p>{student.username}</p>
//             <p>{student.dob}</p>
//             <img src={student.profilePhoto}></img>
//         </div>
//     );
//     }


// w opt

import "./SideBar.css";

function SideBar({ studentsData, setCohortFilter }) {
  const cohortSingleItems = studentsData.reduce((cohorts, student) => {
    const formatCohortCode = `${student.cohort.cohortCode.slice(0, -4)} ${student.cohort.cohortCode.slice(-4)}`;
    if (!cohorts.includes(formatCohortCode)) {
      cohorts.push(formatCohortCode);
    }
    return cohorts;
  }, ["All Students"]);

  const handleCohortClick = (cohort) => {
    setCohortFilter(cohort);
  };

  return (
    <div className="sidebar-list">
      <h2 className="cabin-fonts">Choose a Class by Start Date</h2>
      <ul>
        {cohortSingleItems.map((cohort, index) => (
          <li key={index} onClick={() => handleCohortClick(cohort)}>
            {cohort}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;