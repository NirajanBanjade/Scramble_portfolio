import React from 'react'
import './Hero.css';
import nir from "./nir.png"
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import ScrambleText from '../ScrambleText/ScrambleText';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';

const Hero = () => {
  
  return (
    <section className='Hcontainer'>
      <RevealOnScroll direction="left" delay={0.2}>
        <div className='Hcontent'>
          <h2 style={{ fontSize: '33px' }}>
            <ScrambleText 
              text="Driven by Curiosity, Powered by Code." 
              delay={200}
              duration={800}
              triggerOnScroll={false}
            />
          </h2>
          <p style={{ fontSize: '20px' }}>
            <ScrambleText 
              text="Passionate Developer | Merging Software Engineering with Advanced AI and Machine Learning Solutions." 
              delay={400}
              duration={1000}
              triggerOnScroll={false}
            />
          </p>
          <h2>
            <ScrambleText 
              text="About Me" 
              delay={600}
              duration={800}
              triggerOnScroll={false}
            />
          </h2>
          <p>
            <ScrambleText 
              text="Aspiring Software Engineer with expertise in Python, JavaScript, and C++, passionate about AI, Large Language Models (LLMs), and fine-tuning. I thrive at the intersection of AI and software development, constantly optimizing intelligent systems and building scalable solutions." 
              delay={800}
              duration={1200}
              triggerOnScroll={false}
            />
          </p>
          <p>
            <ScrambleText 
              text="I enjoy working on AI-driven applications, refining models, and tackling real-world challenges through technology. Always eager to push boundaries and stay ahead in software engineering and AI." 
              delay={1000}
              duration={1200}
              triggerOnScroll={false}
            />
          </p>
          <p>
            <ScrambleText 
              text="Let's connect and innovate! 🚀" 
              delay={1200}
              duration={800}
              triggerOnScroll={false}
            />
          </p>
        </div>
      </RevealOnScroll>
      
      <RevealOnScroll direction="right" delay={0.4}>
        <div className='Image'>
          <div>
            <img src={nir} alt="Nirajan Banjade" />
          </div>
          
          <div>
            <RevealOnScroll direction="scale" delay={0.6}>
              <div className='tech'>
                <img src={img1} alt="Technology 1"/>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="scale" delay={0.8}>
              <div className='tech'>
                <img src={img2} alt="Technology 2"/>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="scale" delay={1.0}>
              <div className='tech'>
                <img src={img3} alt="Technology 3"/>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="scale" delay={1.2}>
              <div className='tech'>
                <img src={img4} alt="Technology 4"/>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Hero;