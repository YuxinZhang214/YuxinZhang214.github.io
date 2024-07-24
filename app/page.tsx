export default function Home() {
  return (
    <div className="text-left mt-20 px-8 md:px-16">
      <h1 className="text-4xl md:text-6xl mb-4 flex items-center">
        Research Engineer 
        <span className="ml-2 amp flex items-center" style={{ transform: 'translate(0px, 0px)' }}>
          &amp;
          <svg
            className="hero-circle ml-2"
            x="0px"
            y="0px"
            viewBox="0 0 114 114"
            style={{ transform: 'rotate(-90deg)', width: '24px', height: '24px' }}
          />
        </span>
      </h1>
      <h1 className="text-4xl md:text-6xl mb-4 flex items-center">
          Front-end Engineer 
          <span className="ml-2 amp flex items-center" style={{ transform: 'translate(0px, 0px)' }}>
          &amp;
          <svg
            className="hero-circle ml-2"
            x="0px"
            y="0px"
            viewBox="0 0 114 114"
            style={{ transform: 'rotate(-90deg)', width: '24px', height: '24px' }}
          />
        </span>
      </h1>
      <h1 className="text-4xl md:text-6xl mb-4">
          Full-stack Software Engineer 
      </h1>
      <p className="text-lg md:text-xl">
        I'm Yuxin Zhang, a Frontend-Development, Research Engineer and a Frontend Software Engineer. 
        I help organization develop AI-driven platform for better decision making. I also develop 
        internal digitalisation tool to increase the productivity for the entire organisation. As a 
        hobby, I'm very interested in developing personal tools for increasing personal productivity
      </p>
    </div>
  );
}