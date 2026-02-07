import React, { useState } from 'react';
import { AppStep, Answers } from './types';
import IntroScreen from './components/IntroScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import FinalScreen from './components/FinalScreen';
import FloatingHearts from './components/FloatingHearts';
import { QUESTIONS } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const handleStart = () => {
    setStep('quiz');
  };

  const handleAnswer = (optionId: string) => {
    // Save answer
    const questionId = QUESTIONS[currentQuestionIndex].id;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));

    // Move to next question or results
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      // Small delay to let the click register visually if needed, 
      // but Framer Motion in QuestionScreen handles exit animations gracefully if we update state.
      // We will update state immediately and let AnimatePresence handle the transition.
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep('results');
    }
  };

  const handleFinish = () => {
    setStep('final');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 overflow-x-hidden relative">
      <FloatingHearts />
      
      <main className="relative z-10 container mx-auto min-h-screen flex flex-col justify-center py-8">
        {step === 'intro' && (
          <IntroScreen onStart={handleStart} />
        )}

        {step === 'quiz' && (
          <QuestionScreen 
            currentQuestionIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
          />
        )}

        {step === 'results' && (
          <ResultsScreen 
            answers={answers}
            onNext={handleFinish}
          />
        )}

        {step === 'final' && (
          <FinalScreen />
        )}
      </main>
    </div>
  );
};

export default App;
