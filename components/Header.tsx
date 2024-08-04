const Header = () => {
  return (
    <header className="bg-white shadow-md">
      
      <div className="container flex justify-between items-center py-8 md:py-8 lg:py-16 font-satoshi-regular text-4xl">

        <div className="flex-grow">
          Yuxin
        </div>

        <div>
          <button className="contact-button border border-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all">
            Contact
          </button>
        </div>

      </div>
      
    </header>
  );
};

export default Header;