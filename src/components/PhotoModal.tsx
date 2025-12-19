import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Photo } from './FloatingPhotos';

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative z-10 max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          <X size={28} />
        </button>

        {/* Photo container */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 25px 100px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--sphere-glow) / 0.2)',
            border: '3px solid hsl(var(--sphere-glow) / 0.3)',
          }}
        >
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-auto max-h-[70vh] object-contain bg-card"
          />

          {/* Title overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{
              background: 'linear-gradient(to top, hsl(var(--background) / 0.9) 0%, transparent 100%)',
            }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground">
              {photo.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoModal;
