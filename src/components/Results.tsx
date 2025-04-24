import React from 'react';
import { BrainCircuit, SparkleIcon } from 'lucide-react';
import BellCurve from './BellCurve';

interface UserInfo {
  name: string;
  phone: string;
  countryCode: string;
  email: string;
  acceptTerms: boolean;
}

interface ResultsProps {
  wordCount: number;
  userInfo: UserInfo;
}

const Results: React.FC<ResultsProps> = ({ wordCount, userInfo }) => {
  // This is simplified for the example
  const wordLevel = "Alphabet Apprentice!";
  const percentile = 99;
  const equivalentAge = 1;
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BrainCircuit className="h-7 w-7 text-[#513DEB] mr-2" />
          <span className="text-xl font-sora font-bold text-gray-800">Experience Prime</span>
        </div>
        <button className="flex items-center bg-black text-white py-2 px-4 rounded-lg text-sm font-inter font-medium">
          <SparkleIcon className="h-4 w-4 mr-1" />
          New Test
        </button>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-sora font-bold text-gray-800 mb-2">¡Hola {userInfo.name}!</h2>
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-xl font-inter text-gray-700">Sabes</h2>
        <div className="text-6xl font-sora font-bold my-2">{wordCount}</div>
        <h3 className="text-xl font-inter text-gray-700">Palabras en inglés</h3>
      </div>
      
      <div className="bg-[#513DEB] text-white rounded-xl p-6 text-center mb-8">
        <h2 className="text-xl font-sora font-bold mb-3">"{wordLevel}"</h2>
        <p className="mb-2 font-inter">
          Estás entre el {percentile}% superior de los estudiantes de inglés en el mundo hispanohablante.
        </p>
        <p className="font-inter">
          Equivalente a una persona de {equivalentAge} años en EE. UU.
        </p>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-sora font-bold text-gray-700 mb-4">Tu nivel de vocabulario</h3>
        <BellCurve percentile={percentile} />
        <p className="text-center text-sm font-inter text-gray-600 mt-2">
          Top {percentile}% de los estudiantes de inglés en el mundo hispanohablante
        </p>
      </div>
      
      <div className="mt-8 text-gray-700 font-inter">
        <p>
          La persona promedio en los Estados Unidos conoce alrededor de 20.000 palabras en inglés. 
          Tú conoces {wordCount} palabras, lo que te coloca entre el {percentile}% superior en el mundo hispanohablante.
        </p>
      </div>
    </div>
  );
};

export default Results