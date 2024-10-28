import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center w-full md:w-1/3">
      <div className="mb-4">
        <Image src={icon} alt={title} width={84} height={84} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-6">
        <ServiceCard
            title="Data Visualisation"
            description="Building custom data visualizations tailored to specific business needs"
            icon="/service/info-vis.png"
          />
          <ServiceCard
            title="Frontend Development"
            description="Creating responsive and interactive user interfaces using modern web technologies or low-code platforms"
            icon="/service/frontend-dev.png"
          />
          <ServiceCard
            title="Full Stack Development"
            description="End-to-end development of web applications, from database to user interface"
            icon="/service/digital.png"
          />
        </div>
    )
}

export default Services;
