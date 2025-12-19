import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import class photos
import classPhoto1 from '@/assets/class-photo-1.jpg';
import classPhoto2 from '@/assets/class-photo-2.jpg';
import classPhoto3 from '@/assets/class-photo-3.jpg';
import classPhoto4 from '@/assets/class-photo-4.jpg';
import classPhoto5 from '@/assets/class-photo-5.jpg';
import classPhoto6 from '@/assets/class-photo-6.jpg';
import classPhoto7 from '@/assets/class-photo-7.jpg';
import classPhoto8 from '@/assets/class-photo-8.jpg';

export interface Photo {
  id: number;
  src: string;
  title: string;
}

interface FloatingPhotosProps {
  isVisible: boolean;
  onPhotoClick: (photo: Photo) => void;
}

const photoSources = [
  classPhoto1,
  classPhoto2,
  classPhoto3,
  classPhoto4,
  classPhoto5,
  classPhoto6,
  classPhoto7,
  classPhoto8,
];

const FloatingPhotos: React.FC<FloatingPhotosProps> = ({ isVisible, onPhotoClick }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const { t } = useLanguage();

  // Animate orbit
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.3) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const photos: Photo[] = t.photos.map((photo, index) => ({
    id: photo.id,
    src: photoSources[index],
    title: photo.title,
  }));

  // Calculate orbital positions with animation
  const getPhotoPosition = (index: number, total: number) => {
    const baseAngle = (index / total) * Math.PI * 2;
    const currentAngle = baseAngle + (orbitAngle * Math.PI) / 180;
    const isMobile = window.innerWidth < 768;
    const radius = isMobile ? 140 : 280;
    const x = Math.cos(currentAngle) * radius;
    const y = Math.sin(currentAngle) * radius * 0.6;
    
    return { x, y };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {photos.map((photo, index) => {
            const position = getPhotoPosition(index, photos.length);
            const delay = index * 0.1;
            const isHovered = hoveredId === photo.id;

            return (
              <motion.div
                key={photo.id}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: isHovered ? 1.15 : 1,
                  x: position.x,
                  y: position.y,
                  rotate: isHovered ? 0 : (index % 2 === 0 ? 3 : -3),
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  opacity: { duration: 0.5, delay },
                  scale: { duration: 0.3 },
                  x: { duration: 0.1, ease: 'linear' },
                  y: { duration: 0.1, ease: 'linear' },
                }}
                className="absolute pointer-events-auto cursor-pointer"
                onMouseEnter={() => setHoveredId(photo.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onPhotoClick(photo)}
                style={{
                  zIndex: isHovered ? 20 : 10 - index,
                }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-2 md:-inset-3 rounded-xl md:rounded-2xl transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: 'radial-gradient(circle, hsl(var(--sphere-glow) / 0.4) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />

                  {/* Photo frame */}
                  <div
                    className={`relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${
                      isHovered ? 'shadow-2xl' : 'shadow-lg'
                    }`}
                    style={{
                      border: `2px solid hsl(var(--sphere-glow) / ${isHovered ? 0.8 : 0.4})`,
                      boxShadow: isHovered
                        ? '0 20px 60px hsl(var(--sphere-glow) / 0.3), 0 0 40px hsl(var(--primary) / 0.2)'
                        : '0 10px 40px hsl(0 0% 0% / 0.5)',
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-16 h-12 sm:w-24 sm:h-18 md:w-32 md:h-24 object-cover"
                      style={{
                        filter: isHovered ? 'brightness(1.1)' : 'brightness(0.95)',
                      }}
                    />

                    {/* Warm overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 ${
                        isHovered ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                  </div>

                  {/* Title on hover - hidden on mobile */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-body text-foreground bg-card/90 px-3 py-1.5 rounded-full backdrop-blur-sm border border-border"
                      >
                        {photo.title}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingPhotos;
