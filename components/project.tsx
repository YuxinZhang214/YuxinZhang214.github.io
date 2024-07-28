import React from 'react';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  detailsPageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, detailsPageUrl }) => {
  return (
    <div className="flex flex-col p-8">

      <div className="flex flex-row">
        
        <div className="w-2/2">
          <h3 className="font-satoshi-medium text-2xl mb-2">{title}</h3>
          <p className="font-satoshi-regular text-base mb-4">{description}</p>
        </div>

        <div className="w-1/2">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Link href={detailsPageUrl} className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
          View Details
        </Link>
      </div>

    </div>
  );
};

export default Project;