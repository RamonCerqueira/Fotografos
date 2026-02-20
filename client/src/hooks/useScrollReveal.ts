/**
 * Hook useScrollReveal
 * 
 * Hook customizado que detecta quando um elemento entra na viewport
 * e aplica uma animação de revelação (fade-in).
 * 
 * Uso:
 * const { ref, controls } = useScrollReveal();
 * <motion.div ref={ref} animate={controls} variants={...} />
 */

import { useRef, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useScrollReveal() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Anima apenas uma vez
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}
