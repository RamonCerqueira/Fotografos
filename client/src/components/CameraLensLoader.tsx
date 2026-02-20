import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CameraLensLoaderProps {
  onComplete?: () => void;
}

export default function CameraLensLoader({ onComplete }: CameraLensLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit sequence after 2.5 seconds (simulated loading)
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) {
        setTimeout(onComplete, 800); // Allow exit animation to finish
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Aperture blades configuration
  const blades = Array.from({ length: 8 });

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* Outer Ring - Focus Scale */}
        <motion.div
          className="absolute inset-0 border-[2px] border-zinc-800 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle Ring - Zoom */}
        <motion.div
          className="absolute inset-4 md:inset-8 border-[1px] border-zinc-700 rounded-full border-dashed"
          animate={{ rotate: -180 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Ring - Aperture Housing */}
        <motion.div
          className="absolute inset-12 md:inset-20 border-[4px] border-zinc-900 bg-zinc-950 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
          initial={{ scale: 0.8 }}
          animate={{ scale: isExiting ? 1.5 : 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        >
          {/* Lens Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full z-20 pointer-events-none" />

          {/* Aperture Blades */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            {blades.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[120%] h-[120%] bg-zinc-900 origin-bottom-right border-r border-b border-zinc-800"
                style={{
                  top: '-60%',
                  left: '-60%',
                  rotate: `${i * (360 / blades.length)}deg`,
                  transformOrigin: '100% 100%',
                }}
                initial={{ x: 0, y: 0, rotate: i * (360 / blades.length) }}
                animate={isExiting ? { 
                  x: 100, 
                  y: 100, 
                  rotate: i * (360 / blades.length) + 45,
                  opacity: 0 
                } : { 
                  x: 0, 
                  y: 0, 
                  rotate: i * (360 / blades.length) 
                }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          {/* Center Blur / Lens Opening Effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full z-30"
            initial={{ opacity: 1, scale: 0 }}
            animate={isExiting ? { opacity: 0, scale: 2 } : { opacity: [0.5, 0.2, 0.5], scale: [0.8, 1, 0.8] }}
            transition={isExiting ? { duration: 0.8 } : { duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Text Loading */}
        <motion.div
          className="absolute -bottom-16 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase">Initializing Lens...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
