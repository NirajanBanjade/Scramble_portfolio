import React from 'react'
import './Hero.css';
import nir from "./nir.png"
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Hero = () => {
  
  return (
    <section className='Hcontainer'>
      <div className='Hcontent'>
        <h2 style={{ fontSize: '33px' }}>Driven by Curiosity, Powered by Code.
        </h2>
        <p style={{ fontSize: '20px' }}>
        Passionate Developer | Merging Software Engineering with Advanced AI and Machine Learning Solutions.
        </p>
        <h2>About Me</h2>
        Aspiring Software Engineer with expertise in Python, JavaScript, and C++, passionate about AI, Large Language Models (LLMs), and fine-tuning. I thrive at the intersection of AI and software development, constantly optimizing intelligent systems and building scalable solutions.

I enjoy working on AI-driven applications, refining models, and tackling real-world challenges through technology. Always eager to push boundaries and stay ahead in software engineering and AI.

Let’s connect and innovate! 🚀
      </div>
      
      <div className='Image'>
        <div>
        <img src = {nir} alt ="Noimage" />
        </div>
        
        <div>
          <div className='tech'>
             <img src={img1} alt="No 1"/>
          </div>
          <div className='tech'>
             <img src={img2} alt="No 2"/>
          </div>
          <div className='tech'>
             <img src={img3} alt="No 3"/>
          </div>
          <div className='tech'>
             <img src={img4} alt="No 4"/>
          </div>
          

        </div>

        </div>
        
    </section>
  )
}

export default Hero;