const Header = () => {
  return (
    <header className="py-4 md:py-8 font-satoshi-regular">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Name */}
        <div className="text-3xl font-bold">Yuxin</div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 ">
          <a href="#" className="hover:underline transition-colors">Home</a>
          <a href="#skills-section" className="hover:underline transition-colors">Skills</a>
          <a href="#services-section" className="hover:underline transition-colors">Services</a>
          <a href="#experience-section" className="hover:underline transition-colors">Experience</a>
          <a href="#projects-section" className="hover:underline transition-colors">Projects</a>
        </div>
        
        {/* Contact Button */}
        <div>
          <a 
            href="mailto:yuxin.zhang.project@outlook.com" 
            className="inline-block px-6 py-2 rounded-full border-2 border-black
                       hover:bg-black hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-white-700 my-4"></div>
      
    </header>
  );
};

export default Header;