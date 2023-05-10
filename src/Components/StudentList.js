import StudentCard from "./StudentCard";

function StudentsList({listOfStudents}) {
    return (
        <div className="students-list">
            <h1>This is the student list.</h1>
            <h1>{listOfStudents.length}</h1>
            {listOfStudents.map((student) => {
                return (<StudentCard student={student}/>)
            })}
            <StudentCard student={listOfStudents[0]}/>
        </div>
    )
}

export default StudentsList;