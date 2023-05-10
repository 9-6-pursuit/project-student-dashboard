import "/Users/win/labs/project-student-dashboard/src/data/components/StudentDetail.css"
export default function StudentDetail({student}){
    let percent = Math.round(((student.codewars.current.total/student.codewars.goal.total) * 100))
    return (
        <div className="scoreDiv">
        <section className="soreSection">
            <ul><h4>Codewars: </h4></ul>
            <li><span className="green">Current Total:</span>{student.codewars.current.total}</li>
            <li><span className="green">Last Week: </span>{student.codewars.current.lastWeek}</li>
            <li><span className="green">Goal: </span>{student.codewars.goal.total}</li>
            <li><span className="green">Percent of Goal Acheieved: </span>{percent}%</li>
        </section>
        <section>
            <ul><h4>Scores</h4></ul>
            <li><span className="green">Assignments: </span>%</li>
            <li><span className="green">Projects: </span>%</li>
            <li><span className="green">Assessments</span>%</li>
        </section>
        <section>
            <ul><h4></h4></ul>
            <li><span className="green"></span></li>
            <li><span className="green"></span></li>
            <li><span className="green"></span></li>
        </section>
        </div>
    );
}