import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../constants';
import { Option } from '../types';

interface QuestionScreenProps {
  currentQuestionIndex: number;
  onAnswer: (optionId: string) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ currentQuestionIndex, onAnswer }) => {
  const question = QUESTIONS[currentQuestionIndex];

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <span className="text-xs font-bold text-rose-400 font-serif tracking-widest">
          {currentQuestionIndex + 1} / {QUESTIONS.length}
        </span>
        <div className="h-1 w-24 bg-rose-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-rose-400"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 mb-6 min-h-[140px] flex items-center justify-center text-center">
            <h2 className="text-2xl sm:text-3xl font-serif text-rose-900 font-medium leading-tight">
              {question.text}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option: Option, idx) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 + 0.2 }}
                onClick={() => onAnswer(option.id)}
                className="group relative bg-white/80 hover:bg-white active:bg-rose-50 transition-all duration-200 rounded-2xl p-5 text-left shadow-sm hover:shadow-md border border-white/50 hover:border-rose-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-rose-900/90 font-medium group-hover:text-rose-950 transition-colors">
                    {option.label}
                  </span>
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-lg opacity-0 group-hover:opacity-100 transition-opacity text-rose-500"
                  >
                    ❤️
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionScreen;