// import StudentCards from './StudentTable';
// import "./Students.css";
// export default function Students ({student, cohorts}){
//   const filteredStudents = student.filter(({cohort}) => {
//     return cohort.cohortCode === cohorts
//   })

//     return(
//         <ul className='card'>
//             <h2>{cohorts}</h2>
//             <p>Total Students: 
//               {cohorts === 'All Students' ? student.length: filteredStudents.length}
//               </p>
//             {cohorts === 'All Students' ? student.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort, notes}) => {
//         return (
//           <div key={id}>
//             <StudentCards
//               names={names}
//               profilePhoto={profilePhoto}
//               username={username}
//               dob={dob}
//               certifications={certifications}
//               codewars={codewars}
//               cohort={cohort}
//               notes={notes}
//             />
//           </div>
//         );
//       }) : filteredStudents.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort, notes}) => {
//         return (
//           <div key={id}>
//             <StudentCards
//               names={names}
//               profilePhoto={profilePhoto}
//               username={username}
//               dob={dob}
//               certifications={certifications}
//               codewars={codewars}
//               cohort={cohort}
//               notes={notes}
//             />
//           </div>
//         );
//       })}
//         </ul>
//     )
// }


// w opt
import { useState } from "react";
import "./StudentCard.css";
import ShowDetail from "./ShowDetail";

function StudentCard({studentsData}) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const trackGraduate = () => {
    const { certifications, codewars } = studentsData;
    return (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codewars.current.total > 600
    );
  };

  const middleInitial = studentsData.names.middleName.charAt(0) + '.';

  return (
    <div className="students-card primary-border-color">

      <div className="students-card-row">
        <img className="profile-image-height" 
            src={studentsData.profilePhoto} 
            alt={`${studentsData.names.preferredName} ${middleInitial} ${studentsData.names.surname}`} 
        />
        <ul className="students-card-list">
          <li className="students-name cabin-fonts">
            {studentsData.names.preferredName} {middleInitial} {studentsData.names.surname}
          </li>
          <li>
            <a className="decoration-none" href="/">
              {studentsData.username}
            </a>
          </li>
          <li>
            <span className="primary-text-color">Birthday:</span> {studentsData.dob}
          </li>
        </ul>

        {trackGraduate() && (
          <p className="on-track-to-graduate primary-text-color">On Track to Graduate</p>
        )}
      </div>

      <button className="primary-text-color show-more" onClick={toggleShowMore}>
          {showMore ? "Show Less..." : "Show More..."}
        </button>
        {showMore && <ShowDetail studentsData={studentsData} />}

    </div>
  );
}


export default StudentCard;





