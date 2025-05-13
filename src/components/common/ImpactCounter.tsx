import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ImpactCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({ 
  value, 
  label, 
  suffix = '', 
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  const counterRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      let startValue = 0;
      const endValue = value;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / endValue));
      
      if (counterRef.current) {
        const counter = counterRef.current;
        
        const formatNumber = (num: number) => {
          return num.toLocaleString();
        };
        
        setTimeout(() => {
          const timer = setInterval(() => {
            startValue += 1;
            counter.textContent = formatNumber(startValue) + suffix;
            
            if (startValue === endValue) {
              clearInterval(timer);
            }
          }, stepTime);
        }, delay);
      }
    }
  }, [isInView, value, controls, suffix, delay]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: delay / 1000
          }
        }
      }}
      className="text-center p-6"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
        <span ref={counterRef}>0{suffix}</span>
      </div>
      <p className="text-neutral-600">{label}</p>
    </motion.div>
  );
};

export default ImpactCounter;