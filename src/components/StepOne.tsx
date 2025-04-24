import React from 'react';
import WordButton from './WordButton';

interface StepOneProps {
  onWordSelect: (word: string, isSelected: boolean) => void;
  selectedWords: string[];
}

const StepOne: React.FC<StepOneProps> = ({ onWordSelect, selectedWords }) => {
  const words = [
    'Capacity', 'Forewoor', 'Prostration', 'Posh', 'Boiling',
    'Bamp', 'Undillagguished', 'Say', 'Connume', 'Litigious',
    'Dexemiested', 'Loan', 'Fix', 'Chalkboard', 'Access',
    'Advocate', 'Valkyrie', 'Subsidy', 'Crew', 'Philippine',
    'Loss', 'Blosery', 'Expand', 'Distance', 'Egg',
    'Syrah', 'Assessment', 'Dikonawn', 'Kick', 'Joke'
  ];

  return (
    <div>
      <h2 className="text-2xl font-sora font-bold text-gray-800 mb-2">Selecciona todas las palabras que conoces</h2>
      <p className="text-gray-600 font-inter mb-4">Ten cuidado. Hay algunas palabras falsas mezcladas.</p>
      
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

export default StepOne