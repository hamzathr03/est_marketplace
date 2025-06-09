import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm overflow-hidden';
  
  const variants = {
    default: '',
    hover: 'transition-all duration-300 hover:shadow-md',
    interactive: 'transition-all duration-300 hover:shadow-md hover:-translate-y-1',
  };
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const cardClasses = [
    baseStyles,
    variants[variant],
    paddings[padding],
    className,
  ].join(' ');
  
  return <div className={cardClasses}>{children}</div>;
};

export default Card;