import React from 'react';
import './Work.css';
import Experiencecard from './Experiencecard/Experiencecard';
import { WorkData } from './workdata';
const Work = () => {
  return (
    <section className='work-experience'>
       <h5> Work-Experience</h5>
       <div className='experience-container'>
        {
            WorkData.map((item)=>(
                <Experiencecard key={item.title} details={item}/>
            ))
        }

       </div>
    </section>
  )
}

export default Work