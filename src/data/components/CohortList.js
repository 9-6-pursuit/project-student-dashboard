import "/Users/win/labs/project-student-dashboard/src/data/components/CohortList.css"

export default function CohortList({cohorts, filterStudentsByCohort}) {
    return (
        <section className="sidebar">
            <h2 class="font-weight-bold" className="header">Choose A Class By Start Date</h2>
            <ul className="underlined cohortList sidebar">
                <li><a href="app.js"><h4 class="font-weight-bold" className="link">All Students</h4></a></li>

                {cohorts.map((cohort) => {
                    return (
                        <h4 class="font-weight-bold" className="underlined cohortList"><li key={cohort} onClick={() => {filterStudentsByCohort(cohort)}} >{cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}</li></h4>
                    )
                })}
            </ul>
        </section>
    )
}