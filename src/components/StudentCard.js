import "../CSS/studentCard.css";
import { useState, useEffect } from "react";
import StudentDetails from "./StudentDetails";

export default function StudentCard({student}) {
    const [onTrack, setOnTrack] = useState(false);

    useEffect(() => {
        graduationStatus();
    }, [student]);
    
    const birthday = (dateString) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'
        ];

        const dateParts = dateString.split("/");
        const month = parseInt(dateParts[0], 10);
        const day = parseInt(dateParts[1], 10);
        const year = parseInt(dateParts[2], 10);
        
        const formattedDate =`${months[month-1]} ${day}, ${year}`;

        return formattedDate;
    }

    const graduationStatus = () => {
        if (student.codewars.current.total > 600 && 
            student.certifications.resume === true && 
            student.certifications.linkedin === true && 
            student.certifications.github === true &&
            student.certifications.mockInterview === true
            ) {
            setOnTrack(true);
        } else {
            setOnTrack(false);
        }
    }
    
    return (
        <div className="student-card">
                <div key={student.id} className="container">
                    <div className="image">
                        <img src={student.profilePhoto} alt={student.name} />
                    </div>
                    <div className="student-info">
                        <h4>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h4>
                        <p>{student.username}</p>
                        <p><span>Birthday: </span>{birthday(student.dob)}</p>
                    </div>
                    <div className="graduation-status">
                        {onTrack ? <h5>On Track To Graduate</h5> : null}
                    </div>
                </div>
                <div className="student-details">
                    <StudentDetails student={student}/>
                </div>
            </div>
    )
}