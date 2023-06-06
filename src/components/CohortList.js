import React from 'react'

function CohortList({cohorts, filterStudentsByCohort}) {
  return (
    <div>
        <ul>
            <li>This is the cohort list.</li>
            <li>Number of cohorts: {cohorts.length}</li>
            {
                cohorts.map((cohort) => {
                    return(
                        <li key={cohort} onClick={() => filterStudentsByCohort(cohort)}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring
                        (cohort.length - 4, cohort.length)}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default CohortList