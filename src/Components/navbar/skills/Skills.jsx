import React, { useState } from 'react'
import './Skills.css';
import { Data } from '../../../utils/data';
import Skillcard from './skillcard/Skillcard';
import Skillsinfocard from './skillsinfocard/Skillsinfocard';
const Skills = () => {
  const [selectedSkill,setselectedSkill]= useState(Data[0]);

  const handleselectedSkill=(dat)=>{
    setselectedSkill(dat);
  }
  return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className='skills'>
              {Data.map((item)=>(
                <Skillcard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={()=>{
                  handleselectedSkill(item);
                }}
                />
              ))}
            </div>
            <div className='skills-info'>
              <Skillsinfocard
              heading= {selectedSkill.title}
              skills={selectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills;