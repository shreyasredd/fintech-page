import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'fadeInUp';
  className?: string;
  threshold?: number;
}

export const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  className = '',
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isInView, fadeInUp, fadeIn } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animation === 'fadeInUp' ? fadeInUp : fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 