import "../CSS/cohortList.css";

export default function CohortList({ students,  handleCohortClick}) {
    const getCohorts = () => {
        const cohorts = [];
        
        students.forEach((student) => {
            const { cohortCode } = student.cohort; // this is equivalent to writing const cohortCode = student.cohort.cohortCode;

            if (!cohorts.includes(cohortCode)) {
                cohorts.push(cohortCode);
            }
        });

        const readableCohorts = cohorts.map((cohort) => cohort.split("20").join(" 20")).sort((function(a, b){
            const yearA = parseInt(a.slice(-4));
            const yearB = parseInt(b.slice(-4));

            return yearB - yearA
        }));

        return readableCohorts;
    }
    const readableCohorts = getCohorts();

    return (
        <div className="cohort-list">
            <h3>Choose a Class by Start Date</h3>
            <div className="links">
                <a href="#" onClick={() => handleCohortClick(null)}>All Students</a>
                {readableCohorts.map((cohort, i)=> {
                    return (
                        <div key={i} className="cohort-links">
                            <a href='#' onClick={()=> handleCohortClick(cohort)}>{cohort}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}