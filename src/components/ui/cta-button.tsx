import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  animate?: boolean;
}

const CTAButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className,
  id,
  style,
  animate = true
}: CTAButtonProps) => {
  const variants = {
    primary: {
      glow: 'from-blue-600 via-purple-600 to-blue-800',
      bg: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      textAccent: 'text-blue-100'
    },
    secondary: {
      glow: 'from-gray-500 via-gray-600 to-gray-700',
      bg: 'from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800',
      textAccent: 'text-gray-100'
    },
    warning: {
      glow: 'from-yellow-400 via-orange-500 to-red-500',
      bg: 'from-yellow-500 via-orange-600 to-red-600 hover:from-yellow-600 hover:via-orange-700 hover:to-red-700',
      textAccent: 'text-yellow-100'
    },
    success: {
      glow: 'from-green-500 via-emerald-600 to-green-700',
      bg: 'from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800',
      textAccent: 'text-green-100'
    }
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  const currentVariant = variants[variant];

  return (
    <div className={cn("relative group", className)} id={id}>
      {/* Glow Effect */}
      <div 
        className={cn(
          "absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300",
          currentVariant.glow,
          animate && variant === 'warning' && "animate-pulse"
        )}
      />
      
      <Button
        onClick={onClick}
        className={cn(
          "relative w-full font-bold rounded-2xl shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95 text-white",
          `bg-gradient-to-r ${currentVariant.bg}`,
          sizes[size],
          variant === 'warning' && "border-2 border-yellow-300"
        )}
        style={style}
      >
        {children}
      </Button>
    </div>
  );
};

export default CTAButton;