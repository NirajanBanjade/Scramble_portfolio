import React from 'react';
import './Skillsinfocard.css';

const Skillsinfocard = ({ heading, skills }) => {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>
      <div className='skills-info-content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className='skills-info'>
              <p>{item.skill}</p>
              <p className='percentage'>{item.percentage}</p>
            </div>
            <div className='skills-progress-bg'>
              <div className='skills-progress' style={{ width: "100%" }}>
                </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skillsinfocard;
