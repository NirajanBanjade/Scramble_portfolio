import './App.css';
import Navbar from './Components/navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Skills from './Components/navbar/skills/Skills.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
      <Skills/>
    </div>
    </>
  );
}

export default App;
