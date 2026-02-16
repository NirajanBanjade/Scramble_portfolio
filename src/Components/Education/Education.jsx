import React from 'react';
import './Education.css';
import ScrambleText from '../ScrambleText/ScrambleText';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <RevealOnScroll direction="up" delay={0.2}>
          <h2 className="education-title">
            <ScrambleText 
              text="Education" 
              delay={200}
              duration={800}
              triggerOnScroll={true}
            />
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={0.4}>
          <div className="education-card">
            <div className="education-header">
              <div className="education-main">
                <h3 className="university-name">
                  <ScrambleText 
                    text="Texas State University" 
                    delay={300}
                    duration={800}
                    triggerOnScroll={true}
                  />
                </h3>
                <div className="degree-info">
                  <span className="degree">
                    <ScrambleText 
                      text="B.S. Computer Science" 
                      delay={400}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                  <span className="separator">|</span>
                  <span className="gpa">
                    <ScrambleText 
                      text="GPA: 3.90/4.0" 
                      delay={500}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                  <span className="separator">|</span>
                  <span className="graduation">
                    <ScrambleText 
                      text="Expected Dec 2026" 
                      delay={600}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                </div>
              </div>
            </div>
            
            <div className="education-content">
              <div className="education-subsection">
                <h4 className="subsection-title">
                  <ScrambleText 
                    text="Relevant Coursework" 
                    delay={700}
                    duration={800}
                    triggerOnScroll={true}
                  />
                </h4>
                <div className="coursework-tags">
                  <span className="course-tag">
                    <ScrambleText 
                      text="Data Structures & Algorithms" 
                      delay={800}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                  <span className="course-tag">
                    <ScrambleText 
                      text="Software Engineering" 
                      delay={850}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                  <span className="course-tag">
                    <ScrambleText 
                      text="AI/ML Research" 
                      delay={900}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                  <span className="course-tag">
                    <ScrambleText 
                      text="Distributed Systems" 
                      delay={950}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                  <span className="course-tag">
                    <ScrambleText 
                      text="Computer Vision" 
                      delay={1000}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </span>
                </div>
              </div>
              
              <div className="education-subsection">
                <h4 className="subsection-title">
                  <ScrambleText 
                    text="Achievements" 
                    delay={1100}
                    duration={800}
                    triggerOnScroll={true}
                  />
                </h4>
                <ul className="achievements-list">
                  <li className="achievement-item">
                    <span className="achievement-highlight">
                      <ScrambleText 
                        text="Bronze Medal" 
                        delay={1200}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                    {' '}
                    <ScrambleText 
                      text="ICPC Programming Contest Texas-Mexico (2023-2024)" 
                      delay={1250}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </li>
                  <li className="achievement-item">
                    <span className="achievement-highlight">
                      <ScrambleText 
                        text="Academic Excellence Award" 
                        delay={1300}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                    {' '}
                    <ScrambleText 
                      text="(2024)" 
                      delay={1350}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </li>
                  <li className="achievement-item">
                    <span className="achievement-highlight">
                      <ScrambleText 
                        text="Student Government Scholar" 
                        delay={1400}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                    {' '}
                    <ScrambleText 
                      text="(2023 & 2026)" 
                      delay={1450}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </li>
                  <li className="achievement-item">
                    <span className="achievement-highlight">
                      <ScrambleText 
                        text="President's List" 
                        delay={1500}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                    {' '}
                    <ScrambleText 
                      text="(2024)" 
                      delay={1550}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </li>
                  <li className="achievement-item">
                    <span className="achievement-highlight">
                      <ScrambleText 
                        text="Dean's List" 
                        delay={1600}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                    {' '}
                    <ScrambleText 
                      text="(Every Semester)" 
                      delay={1650}
                      duration={800}
                      triggerOnScroll={true}
                    />
                  </li>
                  <li className="achievement-item">
                    <span className="achievement-highlight">
                      <ScrambleText 
                        text="AWS Solutions Architect Certification" 
                        delay={1700}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                    {' '}
                    <span className="in-progress">
                      <ScrambleText 
                        text="(In Progress)" 
                        delay={1750}
                        duration={800}
                        triggerOnScroll={true}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Education;