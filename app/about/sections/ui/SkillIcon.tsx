import React from 'react';
import Image from 'next/image';

interface SkillIconProps {
  src: string;          // Now required since we're only using images
  alt: string;          // Now required for accessibility
  name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ src, alt, name }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 mb-4 relative">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
    <span className="text-lg font-semibold">{name}</span>
  </div>
);

export default SkillIcon;