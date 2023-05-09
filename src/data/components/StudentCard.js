import StudentDetails from "../../StudentDetails"
import { useState } from "react"

function StudentCard({student}) {
    const [showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }


  return (
    <>
        <div className="container card flex-row student-card">
            <img className="card-img-sm-left example-card-img-responsive" src={student.profilePhoto} alt="student headshot" /> 
            <div className="card-body student-info-container">
                <h3 className="card-title h5 h4-sm">{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</h3>

                <p className="card-text">{student.username}</p>
                <p className="card-text">Birthday: {student.dob}</p>

                {/* ============== HERE ============== */}

                {/* <a className="card-text show-more-button" href="#" onClick={toggleShowMore}> 
                    Show More... 
                </a> */}

                <div className="p"> {showMore ? (
                    <>
                        
                        <a className="btn ternary card-text show-more-button" role="button" onClick={toggleShowMore}>
                            Show Less...        
                        </a>
                        <StudentDetails student={student}/>
                    </>
                    ) : (
                        <button className="btn ternary card-text show-more-button" role="button" onClick={toggleShowMore}>
                            Show More...        
                        </button>
                    )}
                </div>
                


            </div>
        </div>
    </>
  )
}

export default StudentCard


/*

<a class="btn btn-primary" href="#" role="button">Link</a>


<!-- Source -->
<div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="/postboot/assets/img/thumbnail.jpg"/>
  <div class="card-body">
    <h4 class="card-title h5 h4-sm">Left image</h4>
    <p class="card-text">Example text</p>
  </div>
</div>
*/