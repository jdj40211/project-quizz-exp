import React from 'react';
import { BrainCircuit } from 'lucide-react';
import QuizContainer from './components/QuizContainer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <QuizContainer />
    </div>
  );
}

export default App;