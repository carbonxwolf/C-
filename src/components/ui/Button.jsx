import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href,
  onClick,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-500 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-gray-500',
    outline: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900/20 focus:ring-accent-500',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const MotionButton = motion.button;
  const MotionLink = motion(Link);
  const MotionA = motion.a;

  const animationProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
  };

  if (to && !disabled) {
    return (
      <MotionLink to={to} className={classes} {...animationProps} {...props}>
        {children}
      </MotionLink>
    );
  }

  if (href && !disabled) {
    return (
      <MotionA 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={classes} 
        {...animationProps}
        {...props}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <MotionButton 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
