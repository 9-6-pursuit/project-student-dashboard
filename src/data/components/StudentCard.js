import { useState } from "react";
import StudentDetail from "./StudentDetail";
import "/Users/win/labs/project-student-dashboard/src/index.css"
import "/Users/win/labs/project-student-dashboard/src/data/components/StudentCard.css"

export default function StudentList({student}){
    const studentImg = student.profilePhoto
    const [showMore, setShowMore] = useState(false)

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <section className="green-border">
            <div class="card" className="student-card-top">
                <section class="card-body p-2" className="student-card">
                    <div>
                        <img className="student-pics" src={studentImg}/>
                    </div>
                    <div className="student-info">
                        <h2>{student.names.preferredName} {student.names.surname}
                        </h2>
                        <h5>{student.username}</h5>
                        <h5><span className="green">Birthday: </span>{student.dob}</h5>
                        {showMore ? (
                            <>
                            <a onClick={toggleShowMore}><span className="green">Show Less...</span></a>
                            <br></br>
                            <StudentDetail student={student}/>
                            </>
                        ) : (
                            <><a onClick={toggleShowMore}><span className="green">Show More...</span></a></>
                        )}
                    </div>
                </section>
            </div>
            <div className="scores">
                <ul>
                    <li>Codewars: </li>
                    <li><span>Current Total: </span></li>
                    <li><span>Last Week: </span></li>
                    <li><span>Goal: </span></li>
                    <li><span>Percent of Goal Achieved: </span></li>
                </ul>
            </div>
        </section>
    );
};