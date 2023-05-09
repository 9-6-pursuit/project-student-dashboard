import StudentDetails from "../../StudentDetails"


function StudentCard({student}) {
  return (
    <>
        <div className="container card flex-row student-card">
            <img className="card-img-sm-left example-card-img-responsive" src={student.profilePhoto} alt="student headshot" /> 
            <div className="card-body student-info-container">
                <h3 className="card-title h5 h4-sm">{student.names.preferredName} {student.names.middleName.charAt[0]} {student.names.surname}</h3>

                <p className="card-text">{student.username}</p>
                <p className="card-text">Birthday: {student.dob}</p>
                <StudentDetails student={student}/>
                <p className="card-text">Show More... (toggle something)</p>

            </div>
        </div>
    </>
  )
}

export default StudentCard


/*
<!-- Source -->
<div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="/postboot/assets/img/thumbnail.jpg"/>
  <div class="card-body">
    <h4 class="card-title h5 h4-sm">Left image</h4>
    <p class="card-text">Example text</p>
  </div>
</div>
*/