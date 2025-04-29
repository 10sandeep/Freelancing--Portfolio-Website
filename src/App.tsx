import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';
import Cursor from './components/Cursor';
import ProjectsSection from './components/ProjectSection';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Your Name | Professional Portfolio';

    // Add scroll behavior for smooth navigation
    const handleScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const id = link.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Intersection Observer for fade-in animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    document.addEventListener('click', handleScrollToAnchor);
    
    return () => {
      document.removeEventListener('click', handleScrollToAnchor);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
    <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;