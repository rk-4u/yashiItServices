import React, { useEffect, useState } from "react";
import "./CursorAnimation.css"; // Import the CSS file for styling

const CursorAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [celebrationParticles, setCelebrationParticles] = useState([]);

  // Handle mouse movement (normal particles)
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create a new particle at the cursor's position
      const newParticle = {
        id: Math.random(), // Random ID for each particle
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 5 + 5, // Random size
        duration: 1000, // Particle lives for 1 second
        opacity: 1, // Full opacity at the start
      };

      // Add particle to the normal particles array
      setParticles((prev) => [...prev, newParticle]);

      // Remove the particle after it expires
      setTimeout(() => {
        setParticles((prev) => prev.filter((particle) => particle.id !== newParticle.id));
      }, newParticle.duration);
    };

    // Handle mouse click for celebration effect
    const handleClick = (e) => {
      const numParticles = 50; // Number of celebration particles
      const newCelebrationParticles = [];

      // Create multiple particles for the celebration effect
      for (let i = 0; i < numParticles; i++) {
        newCelebrationParticles.push({
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 3, // Random size
          angle: Math.random() * 360, // Random angle for spread
          speed: Math.random() * 2 + 1, // Speed of particles (lower for slower)
          opacity: Math.random() * 0.5 + 0.5, // Random opacity
          gravity: 0.05, // Slower gravity effect
          velocityX: Math.random() * 4 - 2, // Random horizontal velocity
          velocityY: Math.random() * -1 - 1, // Slower vertical velocity (negative for upwards motion)
        });
      }

      // Add the celebration particles to the array
      setCelebrationParticles((prev) => [...prev, ...newCelebrationParticles]);

      // Remove the celebration particles after they expire (around 2 seconds)
      setTimeout(() => {
        setCelebrationParticles((prev) =>
          prev.filter((particle) => !newCelebrationParticles.includes(particle))
        );
      }, 2000);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      
      {/* Render Normal Particles (Cursor effect) */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}ms`,
            }}
          />
        ))}

        {/* Render Celebration Particles (On Click) */}
        {celebrationParticles.map((particle) => (
          <div
            key={particle.id}
            className="celebration-particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `rotate(${particle.angle}deg)`,
              animationDuration: `2s`,
              animationDelay: `${Math.random() * 100}ms`, // Random delay for spread effect
              '--velocityX': `${particle.velocityX}px`,
              '--velocityY': `${particle.velocityY}px`,
              '--gravity': `${particle.gravity}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CursorAnimation;
