import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  detailsPageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, detailsPageUrl }) => {
  return (
    <div className="flex flex-row space-x-8 h-2/3">

      <div id='project-image' className="">
        <div className="overflow-hidden rounded-lg">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={2000} 
            height={600} 
            className="rounded-lg object-cover" 
          />
        </div>
      </div>
      
      <div id='project-text' className="w-1/2 flex flex-col justify-between">

        <div id='project-title'>
          <h3 className="font-satoshi-medium text-2xl mb-4">{title}</h3>
        </div>  

        <p className="flex-grow font-satoshi-regular text-base mb-4">{description}</p>

        <div id='view-more' className="flex justify-end mt-4">
          <Link 
            href={detailsPageUrl} 
            className='px-4 py-2 rounded-full text-black
                       hover:bg-black hover:text-white transition-colors duration-300
                      '
          >
            View Details <span className="">→</span>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Project;