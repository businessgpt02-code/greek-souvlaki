import { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Locations from './components/Locations';
import Contact from './components/Contact';
import './App.css';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Add hover listeners for interactive elements
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.interactive')) {
        cursorRef.current?.classList.add('hovered');
      }
    };
    const handleMouseOut = () => {
      cursorRef.current?.classList.remove('hovered');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="app">
      <div className="noise-overlay"></div>
      <div className="cursor-follower" ref={cursorRef}></div>
      <Hero />
      <ProductShowcase />
      <Locations />
      <Contact />
    </div>
  );
}

export default App;
