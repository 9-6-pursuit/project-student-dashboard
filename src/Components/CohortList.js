function CohortList({cohorts, filteredbyStudentsByCohort}) {
    return (
        <ul>
            <li>All Students </li>
            {cohorts.map((cohort) => {
                return (
                    <li key={cohort} onClick= {() => {
                       filteredbyStudentsByCohort(cohort) 
                    }}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring
                    (cohort.length - 4, cohort.length)}</li>
                )
            })}


        </ul>
    )

}

export default CohortList;
