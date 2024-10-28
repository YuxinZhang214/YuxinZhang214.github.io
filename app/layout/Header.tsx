const Header = () => {
  return (
    <header className="">
      
      <div className="container flex justify-between items-center py-4 md:py-8 font-satoshi-regular ">

        <div className="flex-grow text-4xl">
          Yuxin
        </div>

        <div className="text-2xl">
          <a href="mailto:yuxin.zhang.project@outlook.com" className="inline-block p-4 rounded-full text-black
                       hover:bg-black hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>

      </div>
      
    </header>
  );
};

export default Header;