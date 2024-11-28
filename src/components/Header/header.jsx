import { useRef, useEffect } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Scroll event handler function
  const stickyHeaderFunc = () => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 80px
      if (window.scrollY > 80 || document.documentElement.scrollTop > 80) {
        // Add sticky class to the header
        headerRef.current.classList.add('sticky__header');
      } else {
        // Remove sticky class from the header
        headerRef.current.classList.remove('sticky__header');
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    // Initialize sticky header functionality
    const cleanup = stickyHeaderFunc();
    
    // Clean up event listener when component unmounts
    return cleanup;
  }, []);

  // Scroll to the section when a menu item is clicked
  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;
    
    // Smooth scroll to the section with a top offset
    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center ">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">M</span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Muhib</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">Personal</p>
            </div>
          </div>

          {/* Menu */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li><a onClick={handleClick} className="text-smallTextColor font-[500]" href="#about">About</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[500]" href="#services">Services</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[500]" href="#portfolio">Portfolio</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[500]" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Menu Right */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[500] border border-solid border-smallTextColor py-2 px-3 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i>Let's Talk
            </button>
            <span onClick={toggleMenu} className="text-2xl cursor-pointer text-smallTextColor md:hidden"><i className="ri-menu-line"></i></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
