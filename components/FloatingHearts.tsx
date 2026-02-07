import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; scale: number; blur: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['text-pink-300', 'text-rose-300', 'text-red-200', 'text-pink-200'];
    
    // Generate static random hearts on mount
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      scale: 0.3 + Math.random() * 0.7,
      blur: Math.random() > 0.5 ? Math.random() * 4 : 0, // Depth of field effect
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            scale: heart.scale,
            filter: `blur(${heart.blur}px)`,
          }}
          className={`${heart.color} text-4xl`}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;