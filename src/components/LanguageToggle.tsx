import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border"
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-body transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <div className="w-px h-4 bg-border" />
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-full text-sm font-body transition-all duration-300 ${
          language === 'es'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        ES
      </button>
    </motion.div>
  );
};

export default LanguageToggle;
