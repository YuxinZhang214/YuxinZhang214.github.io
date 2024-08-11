import ProjectDetail from '../detail';

const ProjectPage = () => {

  const project = {
      title: 'Wiki Loves Monuments UK',
      description: 'Data Visualisation for Wiki Loves Monument UK, the world\'s largest photo competition',
      url:'https://wiki-loves-monument-uk-visualisation.vercel.app/',
      coverImage: '/images/wlm-uk.png',
      overview: 'Developed a comprehensive full-stack data visualisation application from end-to-end, highlighting individual contributions to the Wiki Loves Monuments UK competition. Utilised the d3.js library to create interactive charts and maps, showcasing the extensive dataset containing more than 300,000 items across the competition’s 12-year history. ',
      myRole: 'I assumed full ownership of the project, managing every phase from initial data collection to backend development, and ultimately, creating a compelling frontend experience. My responsibilities encompassed gathering and processing data, as well as designing and implementing data visualisation and storytelling features that brought the dataset to life.',
      techStack: 'Leveraged Next.js for front-end development, d3.js for dynamic data visualisation, Django(python) as the web framework for backend operations, and SQLite for database management. Next.js uses both React and Node.js to offer a comprehensive framework that simplifies the development of fast, scalable, and SEO-friendly web applications and React is web development framework leverages JavaScript for building dynamic client-side UIs',
      impact: 'The application is expected to significantly boost participation in the competition, enhance public knowledge of the Wiki Loves Monuments project, and raise awareness of UK monuments. By making these contributions visible and engaging, the project aims to foster a deeper connection between the community and uK\'s cultural heritage',
      images: [
        { src: '/images/wlm-uk/image-1.png' },
        { src: '/images/wlm-uk/image-2.png' },
        { src: '/images/wlm-uk/image-3.png' },
      ],
  };

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      url={project.url}
      coverImage={project.coverImage}
      overview={project.overview}
      myRole={project.myRole}
      techStack={project.techStack}
      impact={project.impact}
      images={project.images}
    />
  );
};

export default ProjectPage;