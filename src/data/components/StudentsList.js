import StudentCard from "./StudentCard"
import "/Users/win/labs/project-student-dashboard/src/data/components/StudentList.css"

export default function StudentList({students}){
    return (
        <div class="" className="students-list">
            <h2 class="font-bold">All students</h2>
            <h4 class="">Total Students: <span className="green">{students.length}</span></h4>
            {students.map((student) => {
                return (
                    <StudentCard key={student.id} student={student}/>
                )
            })}
        </div>
    );
};