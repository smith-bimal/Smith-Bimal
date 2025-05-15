import { useState, useEffect } from 'react';

// Component imports
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import SideBar from './components/SideBar';
import { useTheme } from './context/ThemeContext';
import DesktopProfile from './components/DesktopProfile';

function App() {

  const { themeColors } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-900 text-white relative">
      {/* Background video - keeping as is per request */}
      <video className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0 opacity-30" muted autoPlay loop>
        <source src="video4.mp4" type="video/mp4" />
      </video>

      {/* Mobile menu button */}
      <button
        className={`md:hidden fixed top-10 right-10 z-50 flex flex-col justify-center items-center w-12 h-12 ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2 mb-1 w-5' : 'mb-1 w-4'}`}></span>
        <span className={`block h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0 w-5' : 'mb-1 w-4'}`}></span>
        <span className={`block h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2 mt-2 w-5' : 'mb-1 w-4'}`}></span>
      </button>

      {/* Sidebar */}
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />

      {/* Main Navigation */}


      {/* Main Content */}
      <main className="lg:ml-[26rem] lg:mr-30 xl:ml-[28rem] 2xl:ml-[35rem] 2xl:mr-50 relative">
        <div className="container mx-auto px-4 md:p-10 relative">
          <Navigation activeSection={activeSection} />
          <DesktopProfile themeColors={themeColors} />
          <Hero />
          <About />
          <Resume />
          <Services />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;