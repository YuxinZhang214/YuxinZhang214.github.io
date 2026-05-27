import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional onClick handler
  href?: string; // Optional href to make it a link
  className?: string; // Allow for additional custom classes
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, href, className }) => {
  const baseClasses = "inline-block px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-300";
  const combinedClasses = `${baseClasses} ${className || ''}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
    >
      {text}
    </button>
  );
};