import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  title: string;
  titleHighlight: string;
  subtitle: string;
  hint: string;
  photos: {
    id: number;
    title: string;
  }[];
}

const translations: Record<Language, Translations> = {
  en: {
    title: 'Memories',
    titleHighlight: 'English Class',
    subtitle: 'Tap the sphere to awaken the memories',
    hint: '✨ Click on the magic sphere ✨',
    photos: [
      { id: 1, title: 'Merry Christmas, full of love and magic' },
      { id: 2, title: 'Christmas is a time to share and love' },
      { id: 3, title: 'Peace and joy this Christmas' },
      { id: 4, title: 'Happy holidays!' },
      { id: 5, title: 'The magic of Christmas is in the heart' },
      { id: 6, title: 'Silent night, night of love' },
      { id: 7, title: 'Gifts, laughter and Christmas magic' },
      { id: 8, title: 'Christmas is a warm hug' },
    ],
  },
  es: {
    title: 'Recuerdos',
    titleHighlight: 'Clase de Inglés',
    subtitle: 'Toca la esfera para despertar los recuerdos',
    hint: '✨ Haz clic en la esfera mágica ✨',
    photos: [
      { id: 1, title: 'Feliz Navidad, lleno de amor y magia' },
      { id: 2, title: 'La Navidad es un tiempo para compartir y amar' },
      { id: 3, title: 'Paz y alegría en esta Navidad' },
      { id: 4, title: '¡Felices fiestas!' },
      { id: 5, title: 'La magia de la Navidad está en el corazón' },
      { id: 6, title: 'Noche de paz, noche de amor' },
      { id: 7, title: 'Regalos, risas y magia navideña' },
      { id: 8, title: 'La Navidad es un abrazo cálido' },
    ],
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
