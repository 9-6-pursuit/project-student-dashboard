import "./CohortList.css"
export default function CohortList ({filterStudentsByCohort, cohorts}){
    return (
        <ul className="cohort-list">
        <div>Choose a Class by Start Date.</div>
        <li>All Students</li>
        {cohorts.map((cohort) => {
            return (
                <li 
                className="list"
                key ={cohort} 
                onClick={() => {
                    filterStudentsByCohort(cohort)
                }}
                >{cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}</li>
            )
        })}
        </ul>
    )
}