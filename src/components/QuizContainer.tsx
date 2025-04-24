import React, { useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Results from './Results';
import ProgressBar from './ProgressBar';

interface UserInfo {
  name: string;
  phone: string;
  countryCode: string;
  email: string;
  acceptTerms: boolean;
}

const QuizContainer: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    phone: '',
    countryCode: '+34',
    email: '',
    acceptTerms: false
  });
  const [subscribeToEmails, setSubscribeToEmails] = useState<boolean>(false);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);

  const handleWordSelection = (word: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedWords(prev => [...prev, word]);
    } else {
      setSelectedWords(prev => prev.filter(w => w !== word));
    }
  };

  const handleUserInfoChange = (field: keyof UserInfo, value: string | boolean) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const goToNextStep = () => {
    if (step === 4) {
      const { name, phone, acceptTerms } = userInfo;
      if (!name.trim() || !phone.trim() || !acceptTerms) {
        alert('Por favor, completa todos los campos obligatorios y acepta los términos y condiciones.');
        return;
      }
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md overflow-hidden">
      {!quizComplete ? (
        <>
          <div className="p-5 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BrainCircuit className="h-7 w-7 text-[#513DEB] mr-2" />
                <span className="text-xl font-sora font-bold text-gray-800">Experience Prime</span>
              </div>
              {step < 5 && <div className="text-sm font-inter text-gray-500">Step {step} / 4</div>}
            </div>
            <ProgressBar currentStep={step} totalSteps={4} />
          </div>

          <div className="p-5">
            {step === 1 && <StepOne onWordSelect={handleWordSelection} selectedWords={selectedWords} />}
            {step === 2 && <StepTwo onWordSelect={handleWordSelection} selectedWords={selectedWords} />}
            {step === 3 && <StepThree onWordSelect={handleWordSelection} selectedWords={selectedWords} />}
            {step === 4 && (
              <StepFour 
                userInfo={userInfo}
                onUserInfoChange={handleUserInfoChange}
                subscribeToEmails={subscribeToEmails}
                onSubscribeChange={(e) => setSubscribeToEmails(e.target.checked)}
              />
            )}
          </div>

          <div className="p-5 bg-white border-t flex justify-between">
            {step > 1 ? (
              <button 
                onClick={goToPreviousStep}
                className="py-2 px-6 bg-white border border-gray-300 rounded-lg text-gray-700 font-inter font-medium hover:bg-gray-50 transition-colors"
              >
                Atrás
              </button>
            ) : (
              <div></div>
            )}
            <button 
              onClick={goToNextStep}
              className="py-2 px-6 bg-[#513DEB] rounded-lg text-white font-inter font-medium hover:bg-[#4535d4] transition-colors"
            >
              Continuar
            </button>
          </div>
        </>
      ) : (
        <Results wordCount={selectedWords.length} userInfo={userInfo} />
      )}
    </div>
  );
};

export default QuizContainer