import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 relative z-10"
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white/60 p-5 rounded-full mb-8 backdrop-blur-xl shadow-xl shadow-rose-200/50 ring-1 ring-white/60"
      >
        <Heart className="w-14 h-14 text-rose-500 fill-rose-500" />
      </motion.div>
      
      <h1 className="text-5xl font-serif font-bold text-rose-950 mb-6 leading-tight drop-shadow-sm">
        Hey love <span className="text-rose-600 inline-block animate-bounce">❤️</span>
      </h1>
      
      <p className="text-lg text-rose-900/70 mb-12 max-w-xs font-light leading-relaxed">
        Answer these honestly.<br/> I just want to see how you see me.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="group relative bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium text-xl py-4 px-12 rounded-full shadow-lg shadow-rose-400/30 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <span className="relative flex items-center gap-2">
          Let’s start
        </span>
      </motion.button>
    </motion.div>
  );
};

export default IntroScreen;