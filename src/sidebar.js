

export default function SideBar({cohorts, filterStudentsByCohort}) {

   

    // function selectStartDate(e) {
    //     console.log(e.target.value)
    //     if(e.target.value !== "AllStudents") {
    //         let filteredData = studentData.filter((student) => {
    //             return student.cohort.cohortCode === e.target.value
    //         })
    //         setFilterCohort(filteredData)
    //         console.log(studentData)
    //     } else {
    //         setFilterCohort(studentData)
    //     }
    //     let YearFilter = document.getElementById('year-filter')
    //     let filterYears = YearFilter.addEventListener('change', function() {
    //         let selectYear = YearFilter.value
    //         console.log(selectYear)
    //     //     let filteredItems = years.filter(function(years) {
    //     //         return !selectYear || years.year === 
    //     //     })
    //     return studentData.map((student) => {
    //         return (
    //            student.cohort.cohortCode
    //         )
    //     }).filter((start) => {
    //         return start === selectYear
    //     })
        
    // })
    // console.log(filterYears)
    // setFilterCohort(filterYears)
      
    // }
    

    return (
    <>
        <div className="sidebar-title">
            <h2>Choose a class by Start Date</h2>
        <div className="sidebar-list">
            <select id="year-filter"  onChange={(event) => {
                filterStudentsByCohort(event.target.value)
            }}>
                <option value="AllStudents">All Students</option>
                <option value="Winter2026">Winter 2026</option>
                <option value="Fall2026">Fall 2026</option>
                <option value="Summer2026">Summer 2026</option>
                <option value="Spring2026">Spring 2026</option>
                <option value="Winter2025">Winter 2025</option>
                <option value="Fall2025">Fall 2025</option>
                <option value="Summer2025">Summer 2025</option>
                <option value="Spring2025">Spring 2025</option>
            </select>
        
        </div>
        </div>


    </>
    
    )
}