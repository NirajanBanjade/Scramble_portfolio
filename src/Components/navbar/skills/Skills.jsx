import React, { useState } from 'react'
import './Skills.css';
import { Data } from '../../../utils/data';
import Skillcard from './skillcard/Skillcard';
import Skillsinfocard from './skillsinfocard/Skillsinfocard';
import ScrambleText from '../../ScrambleText/ScrambleText';
import RevealOnScroll from '../../RevealOnScroll/RevealOnScroll';

const Skills = () => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  
  const handleSelectedSkill = (index) => {
    console.log('🔴 Clicked card index:', index);
    setSelectedSkillIndex(index);
  }

  console.log('🟢 Current selectedSkillIndex:', selectedSkillIndex);

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
            {Data.map((item, index) => {
              const isThisCardActive = selectedSkillIndex === index;
              console.log(`Card ${index} (${item.title}): isActive = ${isThisCardActive}`);
              
              return (
                <RevealOnScroll key={`skill-${index}`} direction="scale" delay={0.6 + (index * 0.1)}>
                  <Skillcard
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={isThisCardActive}
                    onClick={() => handleSelectedSkill(index)}
                  />
                </RevealOnScroll>
              );
            })}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delay={0.8}>
          <div className='skills-info'>
            <Skillsinfocard
              heading={Data[selectedSkillIndex].title}
              skills={Data[selectedSkillIndex].skills}
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


export default Skills;