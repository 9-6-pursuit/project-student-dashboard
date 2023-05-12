
export default function SideBar({cohorts, filterStudentsByCohort}) {

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