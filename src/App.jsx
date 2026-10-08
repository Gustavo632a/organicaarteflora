import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Paintings from './components/Paintings';
import About from './components/About';
import Place from './components/Place';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
    const sections = document.querySelectorAll('.reveal'); sections.forEach(section => { section.classList.add('will-reveal'); observer.observe(section); });
    return () => { observer.disconnect(); sections.forEach(section => section.classList.remove('will-reveal')); };
  }, []);
  return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header /><main id="main"><Hero /><Paintings /><About /><Place /><ContactLocation /></main><Footer /><FloatingWhatsApp /></>;
}
