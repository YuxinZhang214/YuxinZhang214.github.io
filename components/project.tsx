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
    <div className="flex flex-row space-x-6">

      <div id='project-image' className="w-1/2 p-4">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img src={imageUrl} alt={title} className="" />
        </div>
      </div>
      
      <div id='project-text' className="w-1/2 flex flex-col m-4">

        <div id='project-title'>
          <h3 className="font-satoshi-medium text-2xl mb-8">{title}</h3>
        </div>  

        <p className="flex-grow font-satoshi-regular text-base mb-4 ">{description}</p>

        <div id='view-more' className="flex justify-end mt-4">
          <Link href={detailsPageUrl} className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
            View Details
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Project;