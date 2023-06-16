import { useEffect, useState } from "react";
import StudentDetail from "./StudentDetail";
import Notes from "./Notes"
import "./StudentCard.css";

function StudentCard({student}){

    const [showBoolean, setShowBoolean]= useState(false)
    const [show, setShow] = useState("Show more...")
    const [graduate, setGraduate] = useState('')

    function handleClick(){
        if(showBoolean === false){
            setShowBoolean(true)
            setShow("Show Less..")
        }
        else{
            setShowBoolean(false)
            setShow('Show More...')
        }
    }
    useEffect(()=>{
        if(student.certifications.resume === true 
            && student.certifications.linkedin === true
            && student.certifications.github === true
            && student.certifications.mockInterview === true){
            setGraduate(true)
        }
    },[student])

    let fixedDate = student.dob.split('/')
    let month = fixedDate[0]

    const date = new Date();
    date.setMonth(month - 1)
    let newMonth = date.toLocaleString('en-US', {month: 'long'})


    return(
        <div className="students-card row">
            <div className='row'>
                <img className="profile-pic" src={student.profilePhoto} alt={student.id} width="150" height="150"/>
                <div className="profile-info col">
                    <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
                    {graduate && 
                        <div className="top-right">On Track to Graduate</div>}
                    <div>{student.username}</div>
                    <div><span className="text-success">Birthday:</span> {newMonth} {fixedDate[1]}, {fixedDate[2]}</div>
                    <br></br>
                    <button onClick={handleClick} className="btn text-success btn-link ">{show}</button>   
                </div>
                <div className="row pl-5 pt-3">
                    <section className="student-info">
                            {showBoolean &&(
                            <StudentDetail student={student}/>
                            )}
                        </section> 

                </div>
                
                <section className="notes">
                    <Notes/>
                </section>
                
            </div>

        </div>
    );
}
export default StudentCard;