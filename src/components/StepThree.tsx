import React from 'react';
import WordButton from './WordButton';

interface StepThreeProps {
  onWordSelect: (word: string, isSelected: boolean) => void;
  selectedWords: string[];
}

const StepThree: React.FC<StepThreeProps> = ({ onWordSelect, selectedWords }) => {
  const words = [
    'Developer', 'Costler', 'Gear', 'Say', 'Honor', 'Century',
    'Bariched', 'Assess', 'Teaspoon', 'Shift', 'Response', 'Joke',
    'Aspeantment', 'Black', 'Asset', 'Cash', 'Eye', 'Courn',
    'Expand', 'Pregnancy', 'Trust', 'Free', 'Long', 'Avoid',
    'Mistlerement', 'Wisdom', 'Could', 'Follow', 'Fix', 'Hit',
    'Pezing', 'Netlern', 'Sandwich', 'Taxpayer', 'Look', 'Egg',
    'Accessible', 'Circibstaction', 'Screeping', 'Retailer'
  ];

  return (
    <div>
      <h2 className="text-2xl font-sora font-bold text-gray-800 mb-2">¡Casi terminamos! Selecciona todas las palabras que conoces.</h2>
      <p className="text-gray-600 font-inter mb-4">Si no estás seguro del significado exacto, déjalo en blanco.</p>
      
      <div className="flex flex-wrap">
        {words.map((word) => (
          <WordButton
            key={word}
            word={word}
            isSelected={selectedWords.includes(word)}
            onSelect={onWordSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default StepThree