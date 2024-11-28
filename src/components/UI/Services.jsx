import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
    return (
      <section id="services">
          <div className="container lg:pt-5">
              <div className="text-center">
                  <h2 className="text-headingColor font-[500] text-[2.4rem] mb-5">
                      What do I help
                  </h2>
                  <p className="lg:max-w-[600px] lg:max-auto m-auto text-headingColor font-[500] text-[16px] leading-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui distinctio perferendis ratione nostrum? Voluptate nihil nisi tempore reiciendis incidunt vitae earum praesentium doloribus adipisci repellat repellendus, aliquam enim corrupti.</p>
              </div>
              <div className="flex flex-col justify-center sm:py-12">
                  <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                      <div className="relative text-sm antialiased text-gray-700 text-semibold">
                          {/* ============== vertical line running through the middle ============== */}
                          <div className="absolute hidden w-1 h-full bg-indigo-300 sm:block left-1/2 transform-translate-x-1/2"></div>
                          {/* ============= left card ============= */}
                          <div className="mt-6 sm:mt-0 sm:md-12">
                              <div className="flex flex-col items-center sm:flex-row">  
                                  <div className="flex items-center justify-start w-full mx-auto">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          {/* Add group class to parent div */}
                                          <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                                              <h3 className="text-primaryColor font-[500] mb-2 group-hover:text-white group-hover:font-[600] text-xl">Frontend Development</h3>
                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima consequatur minus ipsam!</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                  </div>
                              </div>
                          </div>
                          {/* ============= left card end============= */}
                          {/* ============= right card ============= */}
                          <div className="mt-6 sm:mt-0 sm:md-12">
                              <div className="flex flex-col items-center sm:flex-row">  
                                  <div className="flex items-center justify-end w-full mx-0-auto">
                                      <div className="w-full sm:w-1/2 sm:pl-8">
                                          {/* Add group class to parent div */}
                                          <div data-aos="fade-left" data-aos-duration="1300" data-aos-delay="50" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                                              <h3 className="text-primaryColor font-[500] mb-2 group-hover:text-white group-hover:font-[600] text-xl">Backend Development</h3>
                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima consequatur minus ipsam!</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                  </div>
                              </div>
                          </div>
                          {/* ============= right card end============= */}
                          {/* ============= left card ============= */}
                          <div className="mt-6 sm:mt-0 sm:md-12">
                              <div className="flex flex-col items-center sm:flex-row">  
                                  <div className="flex items-center justify-start w-full mx-auto">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          {/* Add group class to parent div */}
                                          <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                                              <h3 className="text-primaryColor font-[500] mb-2 group-hover:text-white group-hover:font-[600] text-xl">UI/UX Desingn</h3>
                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima consequatur minus ipsam!</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                    <figure>
                                        <img src={uiImg} alt="" />
                                    </figure>
                                  </div>
                              </div>
                          </div>
                          {/* ============= left card end============= */}
                          {/* ============= right card ============= */}
                          <div className="mt-6 sm:mt-0 sm:md-12">
                              <div className="flex flex-col items-center sm:flex-row">  
                                  <div className="flex items-center justify-end w-full mx-0-auto">
                                      <div className="w-full sm:w-1/2 sm:pl-8">
                                          {/* Add group class to parent div */}
                                          <div data-aos="fade-left" data-aos-duration="1300" data-aos-delay="50" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-primaryColor">
                                              <h3 className="text-primaryColor font-[500] mb-2 group-hover:text-white group-hover:font-[600] text-xl">Apps Development</h3>
                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima consequatur minus ipsam!</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-primaryColor left-1/2 sm:translate-y-0">
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                  </div>
                              </div>
                          </div>
                          {/* ============= right card end============= */}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  export default Services
  