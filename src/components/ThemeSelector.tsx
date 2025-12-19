import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, ThemeColor } from '@/contexts/ThemeContext';
import { Palette } from 'lucide-react';

const themes: { id: ThemeColor; label: string; colors: string[] }[] = [
  { 
    id: 'blue', 
    label: 'Arctic Blue',
    colors: ['#3B82F6', '#8B5CF6', '#06B6D4']
  },
  { 
    id: 'red', 
    label: 'Christmas Red',
    colors: ['#EF4444', '#F59E0B', '#DC2626']
  },
  { 
    id: 'green', 
    label: 'Forest Green',
    colors: ['#22C55E', '#10B981', '#059669']
  },
];

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-5 h-5 text-foreground" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-14 left-0 bg-card/95 backdrop-blur-md rounded-xl border border-border p-3 shadow-xl min-w-[160px]"
        >
          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  theme === t.id 
                    ? 'bg-primary/20 border border-primary/40' 
                    : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex -space-x-1">
                  {t.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border-2 border-background"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm text-foreground">{t.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSelector;
