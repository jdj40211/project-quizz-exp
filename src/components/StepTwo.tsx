import React from 'react';
import WordButton from './WordButton';

interface StepTwoProps {
  onWordSelect: (word: string, isSelected: boolean) => void;
  selectedWords: string[];
}

const StepTwo: React.FC<StepTwoProps> = ({ onWordSelect, selectedWords }) => {
  const words = [
    'Pain', 'Model', 'Tagy', 'Do', 'Twin', 'Inch', 'Congir',
    'Mimecullis', 'Suit', 'Workshop', 'Couple', 'Manufacturing',
    'Back', 'Shout', 'Hagharian', 'Voonable', 'Hastness',
    'Greeking', 'Ministry', 'Bleeded', 'Issue', 'Momentum',
    'Blood', 'Prosecutor', 'Toss', 'Embrace', 'Foot', 'Want',
    'Check', 'Tour', 'Emphasize', 'Shop', 'It', 'Cottler', 'Go',
    'Wandings', 'Start', 'Buy', 'Diversity', 'Hip'
  ];

  return (
    <div>
      <h2 className="text-2xl font-sora font-bold text-gray-800 mb-2">¡Genial! Probemos con algunas palabras más.</h2>
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

export default StepTwo