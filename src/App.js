import './App.css';
import Navbar from './Components/navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Skills from './Components/navbar/skills/Skills.jsx';
import Work from './Components/Workexperience/Work.jsx';
// import Projects from './Components/Projects/Projects.jsx';
import Contactme from './Components/Contactme/Contactme.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
      <Skills/>
      <Work/>
      {/* <Projects/> */}
      <Contactme/>
    </div>
    </>
  );
}

export default App;
