
function Cohorts({CohortSemesters, toggleStudentData, resetStudentData}) {
  CohortSemesters.sort((a, b) => {
        return b.slice(-4) - a.slice(-4)
    }
  )

    return (
        <div className="col-4">
            <h3>Choose a Class by Start Date</h3>
            <a href="#" onClick={resetStudentData}className="cohort link-primary"> All Students</a>
            {CohortSemesters.map((cohort, i) => {
                return (
                    <div key={i} className="cohort">
                        <a href="#" onClick={() => toggleStudentData(cohort)} className="link-primary">{cohort.slice(0,cohort.length-4)} {cohort.slice(-4)}</a>
                    </div>
                )
            })}
        </div>
    );
  }
  
  export default Cohorts;
  