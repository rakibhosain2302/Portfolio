import { lazy, Suspense } from 'react';
import DotGrid from './components/Dotgrid/DotGrid.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import './styles/globals.css';
import './styles/DotGrid.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Responsive/desktop.css';
import './styles/Responsive/tablet.css';
import './styles/Responsive/large-mobile.css';
import './styles/Responsive/small-mobile.css';

// Lazy load components (handling both default and named exports)
const Hero = lazy(() => import('./components/Hero.jsx'));
const About = lazy(() => import('./components/About.jsx').then(module => ({ default: module.About })));
const MySkill = lazy(() => import('./components/MySkills.jsx').then(module => ({ default: module.MySkill })));
const Milestones = lazy(() => import('./components/Milestones.jsx').then(module => ({ default: module.Milestones })));
const Project = lazy(() => import('./components/Project.jsx'));
const Services = lazy(() => import('./components/Services.jsx').then(module => ({ default: module.Services })));
const Plan = lazy(() => import('./components/Plan.jsx'));
const FAQ = lazy(() => import('./components/Fqa.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/footer.jsx').then(module => ({ default: module.Footer })));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    padding: '40px 20px', 
    textAlign: 'center', 
    color: '#888',
    fontSize: '14px'
  }}>
    Loading...
  </div>
);

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
        
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <MySkill />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Milestones />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Project />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Plan />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>

        <ScrollProgressBar />
      </div>
    </div>
  );
}

export default App;
