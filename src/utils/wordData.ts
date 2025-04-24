// This file would contain real word data categorized by difficulty
// For now, we're using the mock data directly in components

export interface WordCategory {
  id: string;
  words: string[];
}

// This would be expanded with real word lists
export const getWordCategories = (): WordCategory[] => {
  return [
    {
      id: 'basic',
      words: ['Hello', 'World', 'Say', 'Go', 'See', 'Look', 'Fix', 'Work']
    },
    {
      id: 'intermediate',
      words: ['Capacity', 'Workshop', 'Distance', 'Embrace', 'Assessment']
    },
    {
      id: 'advanced',
      words: ['Litigious', 'Valkyrie', 'Subsidy', 'Momentum', 'Prosecutor']
    }
  ];
};

// These would be non-real words to catch people who are guessing
export const getFakeWords = (): string[] => {
  return [
    'Forewoor', 'Prostration', 'Bamp', 'Undillagguished', 'Connume',
    'Dexemiested', 'Blosery', 'Dikonawn', 'Tagy', 'Congir',
    'Mimecullis', 'Hagharian', 'Voonable', 'Hastness',
    'Greeking', 'Bleeded', 'Costler', 'Bariched', 'Aspeantment', 
    'Courn', 'Mistlerement', 'Pezing', 'Netlern', 'Circibstaction', 'Screeping'
  ];
};