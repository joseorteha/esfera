import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChristmasSphere from '@/components/ChristmasSphere';
import SnowParticles from '@/components/SnowParticles';
import FloatingPhotos, { Photo } from '@/components/FloatingPhotos';
import PhotoModal from '@/components/PhotoModal';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeSelector from '@/components/ThemeSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const { t } = useLanguage();

  const handleSphereClick = () => {
    setIsActivated(!isActivated);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-main-gradient">
      {/* Theme selector */}
      <ThemeSelector />
      
      {/* Language toggle */}
      <LanguageToggle />

      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Snow particles */}
      <SnowParticles count={50} />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-6 sm:mb-8 mt-16 sm:mt-0 px-2"
        >
          <h1 className="font-display text-2xl sm:text-4xl md:text-6xl text-foreground mb-2 sm:mb-3">
            <span className="text-gradient-blue">{t.titleHighlight}</span> {t.title}
          </h1>
          <p className="font-body text-muted-foreground text-sm sm:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Sphere and photos container */}
        <div className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Floating photos orbit */}
          <FloatingPhotos
            isVisible={isActivated}
            onPhotoClick={handlePhotoClick}
          />

          {/* Christmas sphere */}
          <motion.div
            className="absolute w-64 h-64 md:w-80 md:h-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <ChristmasSphere
              isActivated={isActivated}
              onClick={handleSphereClick}
            />
          </motion.div>

          {/* Activation glow effect */}
          <AnimatePresence>
            {isActivated && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-64 h-64 md:w-80 md:h-80 pointer-events-none"
              >
                <div
                  className="w-full h-full rounded-full animate-pulse-glow"
                  style={{
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)',
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActivated ? 0 : 0.7 }}
          className="mt-8 text-sm text-muted-foreground font-body"
        >
          {t.hint}
        </motion.p>
      </div>

      {/* Photo modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}

      {/* Bottom decorative gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default Index;
