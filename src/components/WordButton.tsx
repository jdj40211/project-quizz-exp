import React, { useState } from 'react';

interface WordButtonProps {
  word: string;
  isSelected: boolean;
  onSelect: (word: string, isSelected: boolean) => void;
}

const WordButton: React.FC<WordButtonProps> = ({ word, isSelected, onSelect }) => {
  const [selected, setSelected] = useState<boolean>(isSelected);

  const handleClick = () => {
    const newState = !selected;
    setSelected(newState);
    onSelect(word, newState);
  };

  return (
    <button
      className={`m-1 py-2 px-4 rounded-full text-sm font-inter transition-colors duration-200 ${
        selected
          ? 'bg-[#513DEB] text-white'
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
      }`}
      onClick={handleClick}
    >
      {word}
    </button>
  );
};

export default WordButton