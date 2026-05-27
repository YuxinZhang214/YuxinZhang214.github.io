import ServiceCard from './ui/ServiceCard';
import content from '../../content/services.json';

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6">
      {content.services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={''}
          details={''}
          caseStudy={''}
        />
      ))}
    </div>
  );
};

export default Services;