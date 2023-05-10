function Cohorts({ cohortList, filterStudents }) {
  return (
    <div className="cohorts">
      <h3>Choose a Class by Start Date</h3>
      <ul>
        <li className="cohort" onClick={()=>filterStudents("")}>All Students</li>
        {cohortList.map(cohort => 
          <li className="cohort" onClick={()=>filterStudents(cohort)} key={cohort}>
            {cohort.substring(0, cohort.length - 4)} {cohort.slice(-4)}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Cohorts;
