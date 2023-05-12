import { useState } from "react"
import Student from "./Student"

export default function Students({ studentData }) {

    const [showMore, setShowMore] = useState(false)

    function toggleShowMore() {
        setShowMore(!showMore)
    }


    return (
        <div className="student-list-container">
            <div className="students-title">
                <h2>All Students</h2>
                <h3>Total Students: <span className="total-number">{studentData.length}</span></h3>
            </div>
            <div>
                {studentData.map((student) => {
                    return (
                        <div className="students-list" key={student.id}>
                            {/* <h3>{student.names.preferredName} {student.names.middleName.charAt(0)}.  {student.names.surname}</h3>
                    <p>{student.username}</p>
                    <p>Birthday: {student.dob}</p> */}
                            <div className="student-card">
                                <img src={student.profilePhoto} alt={student.names.preferredName} />
                                <div className="sub-student-card">
                                    <h3>{student.names.preferredName} {student.names.middleName.charAt(0)}.  {student.names.surname}</h3>
                                    <p>{student.username}</p>
                                    <p><span className="bday">Birthday:</span> {student.dob}</p>
                                <div>
                                    <ul class="dropdown-student-info">
                                       <button className="show-more-button" onClick={toggleShowMore}>{!showMore ? "Show More..." : "Show Less.."}</button>
                                       <Student student={student} showMore={showMore} toggleShowMore={toggleShowMore}/>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}