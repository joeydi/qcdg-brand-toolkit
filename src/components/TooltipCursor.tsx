import React, { useState, useRef, PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TooltipCursorProps {
  content: string;
  delay: number;
  tooltipStyle: 'dark' | 'light';
}

const TooltipCursor: React.FC<PropsWithChildren<TooltipCursorProps>> = ({
  children,
  content,
  delay,
  tooltipStyle = 'dark',
  ...rest
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const tooltipRef = useRef<HTMLDivElement>(document.createElement('div'));

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    //+12 is added to give a spice between cursor and tooltip
    let tooltipX = clientX + 12;
    let tooltipY = clientY + 12;

    // Check if tooltip exceeds the right side of the viewport
    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = clientX - tooltipWidth - 10;
    }

    // Check if tooltip exceeds the bottom of the viewport
    if (tooltipY + tooltipHeight > viewportHeight) {
      tooltipY = viewportHeight - tooltipHeight - 10;
    }

    setTooltipPosition({ x: tooltipX, y: tooltipY });
  };

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...rest}>
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            ref={tooltipRef}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            css={{
              position: 'fixed',
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              zIndex: 100,
              display: 'inline-block',
              padding: '0.25rem 0.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
              backgroundColor: tooltipStyle === 'dark' ? 'var(--color-slate)' : 'var(--color-sand)',
              color: tooltipStyle === 'dark' ? 'var(--color-sand)' : 'var(--color-slate)',
              borderRadius: 4,
              fontSize: '0.625rem',
            }}>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default TooltipCursor;
