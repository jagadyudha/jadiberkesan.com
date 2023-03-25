import React from 'react';
import { motion } from 'framer-motion';

export type animationProps = {
  variants?: string;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
};

const Animation: React.FC<animationProps> = ({
  variants,
  children,
  duration,
  delay,
  ...props
}) => {
  if (variants === 'fadedown') {
    return (
      <motion.div
        {...props}
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{
          opacity: 1,
          translateY: 1,
        }}
        transition={{
          duration: duration ?? 2,
          type: 'spring',
          bounce: 0.2,
          delay: delay ?? 0.2,
        }}
        viewport={{ once: true, margin: '-20px 0px -20px 0px' }}
      >
        {children}
      </motion.div>
    );
  }

  if (variants === 'fadeup') {
    return (
      <motion.div
        {...props}
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 1,
        }}
        transition={{
          duration: duration ?? 2,
          type: 'spring',
          bounce: 0.2,
          delay: delay ?? 0.2,
        }}
        viewport={{ once: true, margin: '-20px 0px -20px 0px' }}
      >
        {children}
      </motion.div>
    );
  }

  if (variants === 'faderight') {
    return (
      <motion.div
        style={{ overflow: 'hidden' }}
        {...props}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 1,
        }}
        transition={{
          duration: duration ?? 2,
          type: 'spring',
          bounce: 0.2,
          delay: delay ?? 0.2,
        }}
        viewport={{ once: true, margin: '-20px 0px -20px 0px' }}
      >
        {children}
      </motion.div>
    );
  }

  if (variants === 'fadeleft') {
    return (
      <motion.div
        style={{ overflow: 'hidden' }}
        {...props}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 1,
        }}
        transition={{
          duration: duration ?? 2,
          type: 'spring',
          bounce: 0.2,
          delay: delay ?? 0.2,
        }}
        viewport={{ once: true, margin: '-20px 0px -20px 0px' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: duration ?? 2,
        type: 'spring',
        bounce: 0.2,
        delay: delay ?? 0.2,
      }}
      viewport={{ once: true, margin: '-20px 0px -20px 0px' }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
