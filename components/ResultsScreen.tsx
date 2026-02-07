import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Answers } from '../types';
import { QUESTIONS } from '../constants';

interface ResultsScreenProps {
  answers: Answers;
  onNext: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ answers, onNext }) => {
  // Generate Summary Data
  const summary = useMemo(() => {
    return QUESTIONS.map((q) => {
      const selectedOption = q.options.find(opt => opt.id === answers[q.id]);
      return {
        key: q.summaryKey,
        label: selectedOption?.label || '',
        icon: getIconForIndex(q.id)
      };
    });
  }, [answers]);

  // Generate Letter
  const letter = useMemo(() => {
    const fragments = QUESTIONS.map((q) => {
      const selectedOption = q.options.find(opt => opt.id === answers[q.id]);
      return selectedOption?.letterFragment || '';
    });
    return fragments.join(' ');
  }, [answers]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-lg mx-auto px-4 pb-12 pt-4"
    >
      <h2 className="text-3xl font-serif text-rose-950 font-bold text-center mb-8 drop-shadow-sm">
        The Truth Is...
      </h2>

      {/* Summary Chips */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {summary.map((item, idx) => (
          <div key={idx} className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm flex items-center gap-2">
            <span className="text-base">{item.icon}</span>
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">{item.key}</span>
          </div>
        ))}
      </motion.div>

      {/* Letter Paper */}
      <motion.div
        initial={{ y: 40, opacity: 0, rotate: 1 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="bg-[#faf9f6] rounded-sm p-8 shadow-2xl shadow-rose-900/10 relative overflow-hidden max-w-md mx-auto transform rotate-1"
        style={{
            backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px)`,
            backgroundSize: '100% 2rem',
            lineHeight: '2rem'
        }}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-yellow-50 opacity-20 pointer-events-none mix-blend-multiply"></div>

        <div className="relative z-10">
            <span className="block text-rose-400 font-hand text-2xl mb-4 transform -rotate-2">My dearest,</span>
            
            <p className="text-gray-800 font-serif text-lg leading-[2rem] mb-8">
            {letter}
            </p>
            
            <p className="text-rose-900 font-serif text-xl font-bold italic mb-6 leading-relaxed">
            "Being with you makes every version of me better."
            </p>

            <div className="flex justify-end mt-4">
                 <span className="font-hand text-3xl text-rose-500 transform -rotate-3">With love</span>
            </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 text-center"
      >
        <button
          onClick={onNext}
          className="bg-white/80 hover:bg-white text-rose-600 font-medium px-8 py-3 rounded-full shadow-lg shadow-rose-200/50 transition-all hover:scale-105"
        >
          One last thing… →
        </button>
      </motion.div>
    </motion.div>
  );
};

function getIconForIndex(id: number): string {
  switch(id) {
    case 1: return '✨';
    case 2: return '💛';
    case 3: return '🫶';
    case 4: return '🌙';
    case 5: return '❤️';
    default: return '❤️';
  }
}

export default ResultsScreen;