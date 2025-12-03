import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import './App.css'; // обычный CSS

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          orbitRadius: Math.random() * 100 + 50,
          orbitSpeed: Math.random() * 0.02 + 0.01,
          orbitAngle: Math.random() * Math.PI * 2,
          type: Math.random() > 0.7 ? 'orbit' : 'float',
          pulseSpeed: Math.random() * 0.05 + 0.02,
          pulseSize: Math.random() * 2 + 1,
          trail: []
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 70, 229, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      particles.forEach(particle => {
        if (particle.type === 'orbit') {
          particle.orbitAngle += particle.orbitSpeed;
          const centerX = canvas.width / 2 + mousePosition.x * 100;
          const centerY = canvas.height / 2 + mousePosition.y * 100;
          particle.x = centerX + Math.cos(particle.orbitAngle) * particle.orbitRadius;
          particle.y = centerY + Math.sin(particle.orbitAngle) * particle.orbitRadius;

          particle.trail.push({ x: particle.x, y: particle.y });
          if (particle.trail.length > 10) particle.trail.shift();
        } else {
          particle.x += particle.speedX + mousePosition.x * 2;
          particle.y += particle.speedY + mousePosition.y * 2;
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        }

        if (particle.type === 'orbit' && particle.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
          for (let i = 1; i < particle.trail.length; i++) {
            ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
          }
          ctx.strokeStyle = `${particle.color}20`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        const pulse = Math.sin(Date.now() * particle.pulseSpeed) * particle.pulseSize;
        const currentSize = particle.size + pulse;

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 3
        );
        gradient.addColorStop(0, `${particle.color}ff`);
        gradient.addColorStop(1, `${particle.color}00`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });

      const centerX = canvas.width / 2 + mousePosition.x * 50;
      const centerY = canvas.height / 2 + mousePosition.y * 50;

      for (let i = 0; i < 5; i++) {
        const radius = 100 + i * 40;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 - i * 0.02})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const animate = () => {
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  return (
    <div className="app">
      {/* Фоновые эффекты */}
      <BackgroundEffects canvasRef={canvasRef} mousePosition={mousePosition} />

      {/* Контент */}
      <div className="contentWrapper">
        <div className="glassOverlay"></div>
        <Header />
        <main className="main">
          <MainContent />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Плавающие элементы */}
      <div className="floatingElements">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="floatingElement"
            style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          >
            <div className="floatingInner"></div>
          </div>
        ))}
      </div>

      {/* Эффект курсора */}
      <div 
        className="cursorEffect"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}
      ></div>
    </div>
  );
}

export default App;
