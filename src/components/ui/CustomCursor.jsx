import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../../hooks/useCustomCursor';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(true);
  const { position, isPointer } = useCustomCursor(enabled);

  // Disable on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setEnabled(!isTouchDevice);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
