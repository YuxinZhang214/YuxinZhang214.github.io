import ProjectDetail from '../detail';

const ProjectPage = () => {

  const project = {
      title: 'Visualizing the Music Trend',
      description: 'D3.js application for analyzing global music trends',
      url:'https://yuxinzhang214.github.io/Visualising-Music-Trend/',
      coverImage: '/images/music-trend.png',
      overview: `My friend and I developed a D3.js music visualization application using the "Spotify Tracks Chart Dataset (2014-2023)" from Kaggle, which contains around 110,000 entries. The dataset includes categorical variables like track name, release date, and artists, as well as numerical data such as rankings and streams.`,
      myRole: `I was responsible for building the project structure in HTML and Tailwind CSS, implementing the page layout, and creating all the charts using D3.js. My teammate added additional features, like linking to Wiki pages and refining the bubble chart.`,
      techStack: `The application was developed using HTML, Tailwind CSS, and module JavaScript within one week. D3.js was used for all data visualizations.`,
      impact: `Our application visually analyzes key music trends, addressing questions like:
        1. Which artists and tracks consistently rank in the top ten?
        2. How has music streaming evolved, and are there specific trends or seasonal patterns?
        3. What are the most popular genres, and is there a correlation between genre popularity and the number of artists?
      
      This interactive tool helps users explore and understand global music trends over nearly a decade.`,
      images: [
        { src: '/images/music-trend/image-1.png' },
        { src: '/images/music-trend/image-2.png' },
        { src: '/images/music-trend/image-3.png' },
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