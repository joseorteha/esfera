import React, { useMemo } from 'react';

interface SnowParticlesProps {
  count?: number;
}

const SnowParticles: React.FC<SnowParticlesProps> = ({ count = 50 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-snow"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: 'hsl(var(--foreground))',
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowParticles;
