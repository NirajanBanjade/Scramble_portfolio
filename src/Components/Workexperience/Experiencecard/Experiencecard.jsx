import React from 'react';
import './Experiencecard.css';
const Experiencecard = ({details}) => {
  return (
    <div className='par'>
    <div className='work-card'>
        <h4>{details.title}</h4>

        <div className='work-time'>{details.date}</div>

        <ul>
            {details.responsibilities.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Experiencecard;