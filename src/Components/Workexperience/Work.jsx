import React from 'react';
import './Work.css';
import Experiencecard from './Experiencecard/Experiencecard';
import { WorkData } from './workdata';
import ScrambleText from '../ScrambleText/ScrambleText';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
const Work = () => {
  return (
    <section className='work-experience'>
       <RevealOnScroll direction="up" delay={0.2}>
         <h5>
           <ScrambleText 
             text="Work Experience" 
             delay={200}
             duration={800}
             triggerOnScroll={true}
           />
         </h5>
       </RevealOnScroll>
       <div className='experience-container'>
        {
            WorkData.map((item, index)=>(
              <RevealOnScroll key={item.title} direction="up" delay={0.4 + (index * 0.2)}>
                <Experiencecard details={item}/>
              </RevealOnScroll>
            ))
        }
       </div>
    </section>
  )
}

export default Work