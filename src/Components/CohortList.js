function CohortList ({cohorts, filterStudentsByCohort}) {
    return (
        <ul>
            <p>Choose a Class by Start Date</p>
             <li>All Students</li>
            {cohorts.map((cohort) => {
                return (
                    <li key={cohort} onClick={() => {
                        filterStudentsByCohort(cohort)
                    }}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}</li>
            )
        })}</ul>
    )
}

export default CohortList