import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className='items-center justify-between md:flex sm:flex-col md:flex-row'>
                {/* ==========hero left content========== */}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos="fade-right" data-aos-duration="1500" className='text-smallTextColor text-[16px] font-[500]'>Heoll welcome</h5>
                    <h1 data-aos="fade-up" data-aos-duration="1500" className='text-smallTextColor font-[800] text-[1.8rem] sm:text-[40px] leading-[40px] sm:leding-[46px] mt-5'>I' m Muhibur Rahman <br/> Software Developer</h1>
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800" className='flex items-center gap-6 mt-7'>
                        <a className='flex items-center gap-2' href="#contact">
                            <button className='text-white bg-primaryColor font-[500] py-2 px-4 rounded-[8px] hover:font-[500] hover:bg-smallTextColor hover:text-white easy-in duration-700'>
                                <i className="ri-mail-line"></i> Hire Me
                            </button>
                        </a>
                        <a href="#portfolio" className='text-smallTextColor text-[16px] font-[600] border-b border-solid border-smallTextColor'>See portfolio</a>
                    
                    </div>
                    <p data-aos="fade-left" data-aos-duration="1500" className='flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 '><i className="ri-apps-2-line"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione rem exercitationem vitae necessitatibus a nihil libero quae esse eius ullam, corporis soluta cumque quia ex expedita sunt aperiam animi!</p>
                    <div className='flex items-center mt-14 gap-9'>
                        <span className='text-smallTextColor text-[15px] font-[600]'>Follow me:</span>
                        <span>
                            <a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'>
                                <i className="ri-youtube-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#github" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-github-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#facebook" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-facebook-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href="#instagram" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-instagram-line"></i>
                            </a>
                        </span>
                    </div>
                </div>
                {/* ==========hero left end========== */}     
                {/* ==========hero image ============ */}
                <div className='mt-10 basis-1/3 sm:mt-0' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1100" >
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg} alt="" />
                    </figure>
                </div>
                {/* ==========hero image end============ */}
                {/* ==========hero content right ============ */}
                <div className='flex-wrap justify-between gap-3 mt-10 text-center md:basis-1/5 fex md:mt-0 md:flext-col md:justify-end md:text-end'>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={6} duration={2} suffix="+" />
                        </h2>
                        <h4 className='text-headingColor font-[500] text-[17px]'>Years of Experience</h4>
                    </div>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix="%" />
                        </h2>
                        <h4 className='text-headingColor font-[500] text-[17px]'>Success Rate</h4>
                    </div>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={150} duration={2} suffix="+" />
                        </h2>
                        <h4 className='text-headingColor font-[500] text-[17px]'>Happy Clients</h4>
                    </div>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={249} duration={2} suffix="+" />
                        </h2>
                        <h4 className='text-headingColor font-[500] text-[17px]'>Projects Completed</h4>
                    </div>
                </div>
                {/* ==========hero content right end ============ */}
            </div>
        </div>
    </section>
  )
}
export default Hero