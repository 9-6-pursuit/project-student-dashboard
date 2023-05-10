import "./CohortList.css";
export default function CohortList({students, setStudents, setHeading}){

    
    let uniqueCohorts = [...new Set(students.map((student) => (student.cohort.cohortCode)))]
    const seasonObj = { Spring: 0, Summer: 1, Fall: 2, Winter: 3 }

    const result = uniqueCohorts
        .map((season) => season.split(/([0-9]+)/))
        .sort(([aSeason, aYear], [bSeason, bYear]) =>
            +aYear - bYear || seasonObj[aSeason] - seasonObj[bSeason])
        .map(([season, year]) => `${season}${year}`)

    uniqueCohorts = result.reverse()


    function resetList(){
        setHeading("All Students")
        setStudents(students)
    }

    function handleClick(e){

        let cohort = e.target.value
        const spaceCohort = cohort.slice(0, -4)+" "+ cohort.slice(-4)

       let newData = students.filter((student) => {
            return student.cohort.cohortCode === cohort
        })
        setStudents(newData)
        setHeading(spaceCohort)
    }


    return(
        <div className='cohort-list'>
            <h4>Choose a class by start date</h4>
            <ul className="col">
                <div className="border-color">
                    <button onClick={resetList} className="btn">All Students</button>
                </div>
                    {uniqueCohorts.map((cohort) => {
                        let key = Math.floor(Math.random() * 10000)
                        const spaceCohort = cohort.slice(0, -4)+" "+ cohort.slice(-4)
                        
                        return( 
                            <li key={key} className="border-color">
                                <button value ={cohort} onClick={handleClick} className="btn">{spaceCohort}</button>
                            </li>
                        )
                    })}
                    
                
            </ul>
        </div>

    )
}