// This helper file provides functions to simplify embedding the quiz in Framer

/**
 * Creates an HTML snippet that can be used to embed the quiz in Framer
 * @param containerId The ID of the container element where the quiz will be embedded
 * @param height The height of the iframe
 * @returns HTML snippet for embedding
 */
export const getEmbedCode = (containerId: string = 'vocabulary-quiz', height: number = 650): string => {
  // In a real implementation, this would point to the hosted version of the app
  const appUrl = 'https://your-deployed-app-url.com';
  
  return `
<div id="${containerId}" style="width: 100%; max-width: 600px; margin: 0 auto;">
  <iframe 
    src="${appUrl}" 
    width="100%" 
    height="${height}" 
    frameborder="0"
    style="border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
  </iframe>
</div>
  `;
};

/**
 * Creates a React component that can be used to embed the quiz in Framer
 * This would be used if you're using Framer with React
 */
export const FramerComponent = `
import React from 'react';

export function VocabularyQuiz() {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <iframe 
        src="https://your-deployed-app-url.com" 
        width="100%" 
        height="650" 
        frameBorder="0"
        style={{ borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      </iframe>
    </div>
  );
}
`;