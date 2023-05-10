import "./CohortList.css"

function CohortList ({cohorts , filterStudentsByCohort}) {

  return (
      <div class="cohort-List ">
        <h3> Choose a class by start date</h3>


    <ul  class="cohort-graph">
    <li  className="dem-cohorts"> All Students</li>
                { cohorts.map((cohort) => { return (

                <li 
                className="dem-cohorts" key={cohort} onClick={() => {
                filterStudentsByCohort(cohort)
              }}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}
              </li>
            )
        })}
        </ul>




      </div>
    );
  }
  
  export default CohortList ;