import React, { useEffect, useRef } from 'react';
import styles from './BackgroundEffects.module.css';

function BackgroundEffects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating text particles
    const texts = ['React', 'JS', 'CSS', 'HTML', 'Vite', 'Web', 'Dev', 'Code'];
    
    texts.forEach((text, i) => {
      const element = document.createElement('div');
      element.className = styles.floatingText;
      element.textContent = text;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 10}s`;
      element.style.opacity = Math.random() * 0.3 + 0.1;
      element.style.fontSize = `${Math.random() * 20 + 10}px`;
      container.appendChild(element);
    });

    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className={styles.backgroundEffects} ref={containerRef}>
      {/* Energy Orbs */}
      <div className={styles.energyOrbs}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className={styles.energyOrb}
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          >
            <div className={styles.orbCore}></div>
            <div className={styles.orbRing}></div>
            <div className={styles.orbGlow}></div>
          </div>
        ))}
      </div>

      {/* Data Streams */}
      <div className={styles.dataStreams}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={styles.dataStream}
            style={{
              left: `${30 + i * 20}%`,
              animationDelay: `${i * 1}s`
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div 
                key={j}
                className={styles.dataBit}
                style={{
                  animationDelay: `${j * 0.1 + i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Hexagon Grid */}
      <div className={styles.hexagonGrid}>
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className={styles.hexagon}
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`,
              animationDelay: `${(i % 5) * 0.2}s`
            }}
          >
            <div className={styles.hexagonInner}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackgroundEffects;