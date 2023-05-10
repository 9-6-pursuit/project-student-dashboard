import { useState } from "react";



function StudentCard({student}) {
    const [showMore, setShowMore] = useState(false);

    function toggleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div className="student-card">
            <h1>This is the student card.</h1>
            <h1>{student.names.preferredName}</h1>
            <img src={student.profilePhoto}></img>
            <h1>full name</h1>
            <a onClick={toggleShowMore}>Show More</a>
            {showMore ? (
                <p>{student.username}</p>
            ) : (
                <p>This is false.</p>
            )}
        </div>
    )
}

export default StudentCard;