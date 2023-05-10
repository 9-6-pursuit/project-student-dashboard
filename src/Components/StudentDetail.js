import "./Student.css"

function StudentDetail ({student}) {
  
    return (
        <div className="details">
          
          <h1>
          Code Wars:
          <ul>
            {/* <li>Current Total: {student.codewars.current.total}</li> */}
          </ul>
          </h1>
        </div>
    )
}

export default StudentDetail;