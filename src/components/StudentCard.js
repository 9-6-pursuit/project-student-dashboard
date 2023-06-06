import React from 'react'
import { useState } from 'react'
import StudentDetail from './StudentDetail';
import './StudentCard.css'

function StudentCard({student}) {
    const [showMore, setShowMore] = useState(false);


    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
  return (
    <div>
    <div className='student-card'>
        <img src={student.profilePhoto} alt='profile'/>
        <div className='student-info'>
            <h2>{student.names.preferredName} {student.names.surname}</h2>
            {
                showMore ? (
                    <div>
                        <a className='show-more-button' onClick={toggleShowMore}>Show Less...</a>
                        <StudentDetail student={student} />
                    </div>
                ) : (
                    <a className='show-more-button' onClick={toggleShowMore}>Show More...</a>
                )
            }
        </div>
    </div>
    </div>
  )
}

export default StudentCard