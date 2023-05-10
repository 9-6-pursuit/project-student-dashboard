

const SideBar = ({ cohort, filterStudentByCohort }) => {
    return (
        <div>
            <div className="h3 ps-4 my-4 ">Choose a Class by Start Date</div>
            <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> All Student</div>
            {cohort.map((el, index) =>
                <div
                    key={index}
                    className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"
                    onClick={()=>{filterStudentByCohort(el)}}
                >
                    {el}
                </div>
            )}
        </div>
    )
}

export default SideBar;


// return (
//     <div>
//         <div className="h3 ps-4 my-4 ">Choose a Class by Start Date</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> All Student</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor" roll="button" onClick={winter2026}> Winter 2026</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Fall 2026</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Summer 2026</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Spring 2026</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Winter 2025</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Fall 2025</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Summer 2025</div>
//         <div className="h5 pb-2 ps-2 mb-2 border-2 border-bottom border-success pointer-cursor"> Spring 2025</div>
//     </div>
// )