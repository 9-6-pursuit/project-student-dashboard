
function Cohorts({CohortSemesters, toggleStudentData, resetStudentData}) {
  CohortSemesters.sort((a, b) => {
        return b.slice(-4) - a.slice(-4)
    }
  )

    return (
        <div className="col-4">
            <h3>Choose a Class by Start Date</h3>
            <button className="btn btn-link" onClick={resetStudentData} > All Students</button>
            {CohortSemesters.map((cohort, i) => {
                return (
                    <div key={i} className="cohort">
                        <button className="btn btn-link" onClick={() => toggleStudentData(cohort)} >{cohort.slice(0,cohort.length-4)} {cohort.slice(-4)}</button>
                    </div>
                )
            })}
        </div>
    );
  }
  
  export default Cohorts;
  