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
import { Settings, X } from 'lucide-react';
import ThemeConfigPanel from './components/ThemeConfigPanel';

function App() {
  const { themeColors, setCurrentTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);

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

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(storedTheme);
    } else {
      setCurrentTheme('green');
    }

  }, [])

  return (
    <div className="bg-neutral-900 text-white relative">
      {/* Background video - keeping as is per request */}
      <video className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0 opacity-30" muted autoPlay loop>
        <source src="video4.mp4" type="video/mp4" />
      </video>

      {/* Mobile menu button */}
      <button
        className={`md:hidden fixed top-6 right-2 z-50 flex flex-col justify-center items-center w-12 h-12 ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2 mb-1 w-5' : 'mb-1 w-4'}`}></span>
        <span className={`block h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0 w-5' : 'mb-1 w-4'}`}></span>
        <span className={`block h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2 mt-2 w-5' : 'mb-1 w-4'}`}></span>
      </button>

      {/* Sidebar */}
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} configOpen={configOpen} setConfigOpen={setConfigOpen} />

      {/* Theme Configuration Panel */}
      <ThemeConfigPanel open={configOpen} setConfigOpen={setConfigOpen} />

      {/* Main Content */}
      <main className="lg:ml-[26rem] lg:mr-30 xl:ml-[28rem] 2xl:ml-[35rem] 2xl:mr-50 relative">
        <div className="fixed top-8 -left-1 py-2 px-3 border-2 border-l-0 rounded-r-2xl border-neutral-700 z-50 cursor-pointer bg-neutral-900">
          {configOpen ?
            <X className="text-neutral-400"
              onClick={() => setConfigOpen(false)}
            />
            :
            <Settings
              className={`setting-spin text-neutral-400`}
              onClick={() => setConfigOpen(true)}
            />}
        </div>


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