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
        <img className="profile-image-height" src={studentsData.profilePhoto} />
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

