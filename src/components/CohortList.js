import React, { useState } from "react"

function CohortList({ cohorts,filterStudentsbyCohort, resetStudentView }){

    return (
        <div>
            <h3 className="start-date">Choose a Class by Start Date</h3>
            <ul>
                <li className="cohort-list" onClick={resetStudentView}>All Students</li>
                {cohorts.map((cohort)=>{
                    return(
                        <li className="cohort-list" onClick={()=>{
                            filterStudentsbyCohort(cohort)
                        }}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring (cohort.length - 4, cohort.length)}</li>
                    )
                })}
            </ul> 
        </div>
    )
}

export default CohortList