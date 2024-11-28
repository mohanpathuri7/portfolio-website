const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#12141e] pt-12 ">
      {/* ============ footer top ============ */}
      <div className="container">
        <div className="items-center justify-between sm:flex md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[24px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a className='flex items-center gap-2' href="#contact">
                <button className='text-white bg-primaryColor font-[500] py-2 px-4 rounded-[8px] hover:font-[500] hover:bg-smallTextColor hover:text-white easy-in duration-700'>
                    <i className="ri-mail-line"></i> Hire Me
                </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2 ">
            <p className="mt-4 leading-7 text-gray-300 sm:mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum nostrum velit sit voluptatem rem! Et ut ipsum illo consequuntur ipsam, debitis commodi quia possimus ex, exercitationem aliquid vel aspernatur?</p>
            <div className="flex flex-wrap items-center gap-[10px] mt-10 md:gap-8">
              <span className="text-gray-300 font-[600] text-[15px]">Follow Me:</span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#github" className="text-gray-300 font-[500] text-[18px]"><i className="ri-github-fill"></i></a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#youtube" className="text-gray-300 font-[500] text-[18px]"><i className="ri-youtube-line"></i></a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#facebook" className="text-gray-300 font-[500] text-[18px]"><i className="ri-facebook-line"></i></a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#instagram" className="text-gray-300 font-[500] text-[18px]"><i className="ri-instagram-line"></i></a>
              </span>
            </div>
          </div>
        </div>
        <div>
            <ul className="flex items-center justify-center gap-10 mt-10">
                <li><a className="text-gray-400 font-[500]" href="#about">About</a></li>
                <li><a className="text-gray-400 font-[500]" href="#services">Services</a></li>
                <li><a className="text-gray-400 font-[500]" href="#portfolio">Portfolio</a></li>
                <li><a className="text-gray-400 font-[500]" href="#contact">Contact</a></li>
            </ul>
        </div>
      </div>
      {/* ============ footer top End============ */}
      {/* ============ footer bottom============ */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">M</span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px] ">Muhib</h2>
                  <p className="text-gray-400 text-[14px] font-[400]">Personal</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">Copyright {year} developed by Muhib - All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ============ footer bottom End============ */}
    </footer>
  )
}
export default Footer