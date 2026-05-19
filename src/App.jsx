import DotGrid from './components/Dotgrid/DotGrid.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import {About} from './components/About';
import { MySkill } from './components/MySkills.jsx';
import {Milestones} from './components/Milestones.jsx';
import Project  from './components/Project.jsx';
import FAQ from './components/Fqa.jsx';
import Contact from './components/Contact.jsx';
import {Services} from './components/Services';
import Plan from './components/Plan.jsx';
import {Footer} from './components/footer.jsx';
import {ScrollProgressBar} from './components/ScrollProgressBar';
import './styles/globals.css';
import './styles/DotGrid.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Responsive/desktop.css';
import './styles/Responsive/tablet.css';
import './styles/Responsive/large-mobile.css';
import './styles/Responsive/small-mobile.css';

function App() {
  return (
    <div className="app position-relative" style={{ width: '100%', minHeight: '100vh' }}>
      
      {/* DotGrid Background */}
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#2F293A"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        className="dotgrid-bg"
      />

      <div className="overlay-layer"></div>

      {/* Foreground Content */}
      <div className="position-relative content-layer container">
        <Navbar />
        <Hero />
        <About />
        <MySkill />
        <Milestones />
        <Project />
        <Services />
        <Plan />
        <FAQ />
        <Contact />
        <Footer />
        <ScrollProgressBar />
      </div>
    </div>
  );
}

export default App;
