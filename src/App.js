import './App.css';
import Navbar from './Components/navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Skills from './Components/navbar/skills/Skills.jsx';
import Work from './Components/Workexperience/Work.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contactme from './Components/Contactme/Contactme.jsx';
import Education from './Components/Education/Education.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <section id="home">
          <Hero />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Work />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contactme />
        </section>
      </div>
    </>
  );
}

export default App;
