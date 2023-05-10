import Notes from "./Notes";
import ShowCard from "./ShowCard";
import { useState } from "react";

const StudentCard = ({ student }) => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    let month = { "1": "Jan", "2": "Feb", "3": "Mar", "4": "Apr",
                 "5": "May", "6": "Jun", "7": "Jul", "8": "Aug", 
                "9": "Sep", "10": "Oct", "11": "Nov", "12": "Dec" }

    const dateArray = student.dob.split("/")

    return (
        <div>
            <div className="card rounded-0 border-2 border-success mb-3 ">
                <div className="row ">
                    <div className="col-md-2">
                        <img src={student.profilePhoto} className="rounded px-2 pt-2 --img" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h3 className="card-title my-0">{student.names.preferredName} {student.names.surname}</h3>
                            <p className="card-text my-0">{student.username}</p>
                            <p className="card-text"><span className="text-success">Birthday:</span> {month[dateArray[0]]} {dateArray[1]}, {dateArray[2]}</p>
                            {show ? 
                            <div>                       
                                <p className="text-success" role="button" onClick={toggleShow}><u>Show Less...</u></p>
                                <ShowCard student={student} />
                                <Notes/>
                            </div>
                             : <p className="text-success" role="button" onClick={toggleShow}><u>Show More...</u></p> }
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard;

