import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { DesignProcess } from './components/DesignProcess';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <DesignProcess />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
