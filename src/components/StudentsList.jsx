import StudentCard from "./StudentCard";

const StudentsList = ({data}) => {
    return (
        <div>
            <div className="h3 mt-4 mb-0">All Students</div>
            <p>Total Students:<span className="text-success"> {data.length}</span></p>
            {data.map(el => <StudentCard key={el.id} student={el}/>)}
            
        </div>
    )
}

export default StudentsList;