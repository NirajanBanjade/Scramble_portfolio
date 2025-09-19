import React, { useState } from 'react'
import './Skills.css';
import { Data } from '../../../utils/data';
import Skillcard from './skillcard/Skillcard';
import Skillsinfocard from './skillsinfocard/Skillsinfocard';
import ScrambleText from '../../ScrambleText/ScrambleText';
import RevealOnScroll from '../../RevealOnScroll/RevealOnScroll';
const Skills = () => {
  const [selectedSkill,setselectedSkill]= useState(Data[0]);

  const handleselectedSkill=(dat)=>{
    setselectedSkill(dat);
  }
  return (
    <section className='skills-container'>
        <RevealOnScroll direction="up" delay={0.2}>
          <h5>
            <ScrambleText 
              text="Technical Proficiency" 
              delay={200}
              duration={800}
              triggerOnScroll={true}
            />
          </h5>
        </RevealOnScroll>
        <div className='skills-content'>
            <RevealOnScroll direction="left" delay={0.4}>
              <div className='skills'>
                {Data.map((item, index)=>(
                  <RevealOnScroll key={item.title} direction="scale" delay={0.6 + (index * 0.1)}>
                    <Skillcard
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=>{
                      handleselectedSkill(item);
                    }}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={0.8}>
              <div className='skills-info'>
                <Skillsinfocard
                heading= {selectedSkill.title}
                skills={selectedSkill.skills}
                />
              </div>
            </RevealOnScroll>
        </div>
    </section>
  )
}

export default Skills;