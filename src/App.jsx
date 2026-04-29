import DotGrid from './components/Dotgrid/DotGrid.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import {About} from './components/About';
import { MySkill } from './components/MySkills.jsx';
import {Milestones} from './components/Milestones.jsx';
import {Portfolio} from './components/Portfolio';
import {Services} from './components/Services';
import {Testimonials} from './components/Testimonials';
import {Footer} from './components/Footer';
import {ScrollProgressBar} from './components/ScrollProgressBar';
import './styles/globals.css';
import './styles/DotGrid.css';
import './styles/Hero.css';
import './styles/About.css';

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
      <div className="position-relative content-layer">
        <Navbar />
        <Hero />
        <About />
        <MySkill />
        <Milestones />
        <Portfolio />
        <Services />
        <Testimonials />
        <Footer />
        <ScrollProgressBar />
      </div>
    </div>
  );
}

export default App;
