import React from 'react';
import { motion } from 'framer-motion';

const FinalScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-8"
    >
      <div className="bg-white/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-white/60 shadow-xl max-w-sm relative overflow-hidden w-full">
        
        {/* Decorative corner flash */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 flex flex-col items-center">
            
            {/* Image Section - Static Polaroid */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full relative mb-8"
            >
                <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border-8 border-white bg-white relative flex items-center justify-center transform rotate-1">
                    <img 
                        /* 
                           NOTE: Fixed the Google Drive link to be a direct download link.
                           Previously it was a 'view' link which is a webpage, not an image.
                        */
                        src="https://drive.google.com/uc?export=view&id=1r6OjyVDNihSgxlbnnXsabG63rMyQRyxv"
                        alt="Us" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border border-white/40 shadow-sm rotate-2"></div>
            </motion.div>

            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="text-2xl font-serif text-rose-950 leading-tight mb-6"
            >
            Loving you feels easy, safe, and real.
            </motion.p>
            
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-base text-rose-900/80 font-light"
            >
            And I hope I never stop making you feel as loved as you make me feel.
            </motion.p>
            
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 2.0, duration: 1 }}
                className="h-1 bg-rose-400/50 mx-auto rounded-full my-8"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
            >
                <h3 className="text-xl font-bold text-rose-600 mb-1">
                Happy Valentine’s Week, baby ❤️
                </h3>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0 }}
                className="text-2xl text-rose-500 font-hand mt-8 transform -rotate-2"
            >
            — Yours, always.
            </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default FinalScreen;