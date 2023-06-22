import "../CSS/studentDetails.css";
import { useEffect, useState } from "react";

export default function StudentDetails({ student }) {
    const [showMore, setShowMore] = useState(false);
    const [commenter, setCommenter] = useState("");
    const [comment, setComment] = useState("");
    const [noteList, setNoteList] = useState([])

    const trimmedStudentDetails = () => {
        const {id, codewars, certifications, cohort} = student;

        console.log({
            id,
            codewars,
            certifications,
            cohort,
        });
        return;
    }

    useEffect(() => {
        trimmedStudentDetails();
    }, [student])

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    const changePercentageColor  = () => {
        const percentage = (student.codewars.current.total/student.codewars.goal.total)*100;
        if (percentage >= 100){
            return "green";
        } else if (percentage >= 50) {
            return "yellow";
        } else {
            return "red";
        }
    }

    /*
    to capture and update the commenter and comment values in the handleTextChange fxn I need to handle the inputs separately unlike the forms lab where we spread the text in the setUser object. I can do this by checking the id attribute of the input element and updating the corresponding state.
    */
    const handleTextChange = (event) => {
        const {id, value} = event.target;
        
        if (id === "name") {
            setCommenter(value);
        } else if (id ==="comment") {
            setComment(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        
        if (comment.trim() !== "") {
           const newNote = {
            id: Date.now(),
            commenter: commenter,
            comment: comment.trim(),
           }

           setNoteList((prevNoteList) => [...prevNoteList, newNote]);
        };
        console.log(commenter);

        resetForm();
    }

    const resetForm = () => {
        setCommenter('');
        setComment('');
    }

    return (
        <div>
            <a href="#" onClick={toggleShowMore}>
                {showMore ? "Show Less..." : "Show More..."}
            </a>
            {showMore ? (
                <div className="details-container">
                    <div className="student-details">
                        <div className="codewars">
                            <h5>Codewars:</h5>
                            <ul key={student.id}>
                                <li><span>Current Total: </span>{student.codewars.current.total}</li>
                                <li><span>Last Week: </span>{student.codewars.current.lastWeek}</li>
                                <li><span>Goal: </span>{student.codewars.goal.total}</li>
                                <li><span>Percent of Goal Achieved: </span>
                                <span className={changePercentageColor()}>{((student.codewars.current.total/student.codewars.goal.total)*100).toFixed(0)} %</span></li>
                            </ul>
                        </div>
                        <div className="scores">
                            <h5>Scores:</h5>
                            <ul key={student.id}>
                                <li><span>Assignments: </span> {student.cohort.scores.assignments*100} %</li>
                                <li><span>Projects: </span>{student.cohort.scores.projects*100} %</li>
                                <li><span>Assessments: </span>{student.cohort.scores.assessments*100} %</li>
                            </ul>
                            
                        </div>
                        <div className="certifications">
                            <h5>Certifications:</h5>
                            <ul key={student.id}>
                                <li><span>Resume: </span>{student.certifications.resume ? "✅" : "❌"}</li>
                                <li><span>Linkedin: </span>{student.certifications.linkedin ? "✅" : "❌"}</li>
                                <li><span>Mock Interview: </span>{student.certifications.mockInterview ? "✅" : "❌"}</li>
                                <li><span>GitHub: </span>{student.certifications.github ? "✅" : "❌"}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="comment">
                        <h5>1-on-1 Notes</h5>
                        <form id="form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Commenter's Name</label>
                            <input
                            type="text"
                            value={commenter}
                            onChange={handleTextChange}
                            id="name"
                            placeholder="Your name"
                            />
                            <label htmlFor="comment">Comment</label>
                            <input
                            type="text"
                            value={comment}
                            onChange={handleTextChange}
                            id="comment"
                            placeholder="Enter a comment"
                            />
                            <button type="submit">Submit</button>
                        </form>
                        <ul id="noteList">
                            {noteList.length ? (
                            noteList.map((note, i) => (
                                <li key={i}><span>{note.commenter}: </span> {note.comment}</li>
                            ))
                        ) : (
                            <li>No notes yet</li>
                        )}
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    )
}