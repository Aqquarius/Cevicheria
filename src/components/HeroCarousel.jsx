import React, { useState, useEffect, useRef } from 'react';
import plat from '../assets/plat.PNG';
import Cuy from '../assets/cuy.png';
import sudado from '../assets/sudado.PNG';

const slidesData = [
  {
    image: plat,
    subtitle: 'Especialidad de la Casa',
    title: 'El Ceviche Peruano de Verdad',
    desc: 'Preparado al instante con la pesca del día, limón fresco y el toque tradicional de ají limo que te encanta.',
    ctaText: 'Explorar la Carta',
    ctaLink: '#carta'
  },
  {
    image: Cuy,
    subtitle: 'Nuestros Clásicos Calientes',
    title: 'Cuy Frito',
    desc: 'Cuy frito acompañado de arroz con ajiaco y zarza.',
    ctaText: 'Ver Platos Calientes',
    ctaLink: '#carta'
  },
  {
    image: sudado,
    subtitle: 'Fusión y Tradición',
    title: 'Sudado',
    desc: 'Delicioso pescado cocido en un sabroso caldo con tomate, cebolla, ají y especias, acompañado de camote y yuca.',
    ctaText: 'Explorar la Carta',
    ctaLink: '#carta'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const SLIDE_DURATION = 6000; // 6 seconds per slide

  // Handle slide changing logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    setProgress(0);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Play/Pause toggle
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Timer effect for autoplay
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  // Smooth progress bar update
  useEffect(() => {
    if (isPlaying) {
      const step = 100; // update every 100ms
      const increment = (step / SLIDE_DURATION) * 100;
      
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + increment;
        });
      }, step);
    } else {
      setProgress(0);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  return (
    <section className="hero-carousel" id="inicio">
      {slidesData.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="slide-img" />
          <div className="slide-content">
            <span className="slide-subtitle">{slide.subtitle}</span>
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-desc">{slide.desc}</p>
            
            <div className="slide-actions">
              <a href={slide.ctaLink} className="btn btn-primary">
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Manual buttons */}
      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior slide">
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Siguiente slide">
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="carousel-indicators">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause control */}
      <button className="carousel-play-control" onClick={togglePlay} aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>

      {/* Slide progress line */}
      {isPlaying && (
        <div 
          className="carousel-progress" 
          style={{ width: `${progress}%` }} 
        />
      )}
    </section>
  );
}
