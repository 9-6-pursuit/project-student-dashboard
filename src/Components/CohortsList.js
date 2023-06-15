import "./Cohorts.css"

function CohortsList ({cohorts, filterByCohort}) {
    return (
        <div className="cohort">
          <h1>Choose A Class By Start Date </h1>
          <ul>
            <li>All Students</li>
          </ul>
          {cohorts.map((cohort) => {
            return (
             
              <ul>
              <li key={cohort} onClick={() => {
                filterByCohort(cohort)
              }}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}</li>
              </ul>
            )
          })}
        </div>
    )
}

export default CohortsList;