import React from 'react';

const CertificationsInfo = ({ student }) => {
  const { certifications } = student;

  return (
    <div className="certifications-info">
      <h3>Certifications</h3>
  

      <p><span className="green-text">Resume:</span> {certifications.resume ? 'Yes' : <span style={{color: 'red'}}>❌</span>}</p>
<p><span className="green-text">LinkedIn:</span> {certifications.linkedin ? 'Yes' : <span style={{color: 'red'}}>❌</span>}</p>
<p><span className="green-text">Mock Interview:</span> {certifications.mockInterview ? 'Yes' : <span style={{color: 'red'}}>❌</span>}</p>
<p><span className="green-text">GitHub:</span> {certifications.github ? 'Yes' : <span style={{color: 'red'}}>❌</span>}</p>


    </div>
  );
};

export default CertificationsInfo;

