import {useState, useEffect} from 'react';
import data from '../../assets/data/portfolioData';
import Modal from './Modal';


const Portfoilo = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    useEffect(() => {
        if(selectTab === 'all'){
            setPortfolios(data)
        }
        if(selectTab === 'web-design'){
            const filtereData = data.filter(item => item.category === 'Web Design')
            setPortfolios(filtereData)
        }
        if(selectTab === 'ux-design'){
            const filtereData = data.filter(item => item.category === 'Ux')
            setPortfolios(filtereData)
        }
    }, [selectTab])
    

    const loadMoreHandler = () =>{
        setNextItems(prev => prev + 3)
    }
    
    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    } 
  return (
    <section id="portfolio">
        <div className="container">
            <div className="flex flex-wrap items-center justify-between">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2rem] font-[700]">My react projects</h3>
                </div>
                <div className="flex gap-3">
                    <button onClick={()=>setSelectTab('all')} className="px-4 py-2 border border-solid rounded-[8px] text-smallTextColor border-smallTextColor">All</button>
                    <button onClick={()=>setSelectTab('web-design')} className="px-4 py-2 border border-solid rounded-[8px] text-smallTextColor border-smallTextColor">Web Design</button>
                    <button onClick={()=>setSelectTab('ux-design')} className="px-4 py-2 border border-solid rounded-[8px] text-smallTextColor border-smallTextColor">UX Design</button>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-12">
                    {
                        portfolios.slice(0, nextItems).map((portfolio, index) => (
                            <div key={index} data-aos='fade-zoom-in' data-aos-delay="50" data-aos-duration='1000' className='max-w-full group sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px] ' src={portfolio.imgUrl} alt="" />
                                </figure>
                                <div className='absolute top-0 left-0 w-full h-full bg-opacity-40 bg-primaryColor z-[5] hidden group-hover:block'>
                                    <div className='flex items-center justify-center w-full h-full '>
                                        <button onClick={() => showModalHandler(portfolio.id)} className='px-4 py-2 text-white rounded-[8px] bg-headingColor hover:bg-smallTextColor font-[500] ease-in duration-200'>See Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-6 text-center'>
                {
                    nextItems < portfolios.length && data.length > 6 && <button onClick={loadMoreHandler} className='px-4 py-2 text-white rounded-[8px] bg-primaryColor hover:bg-smallTextColor font-[500] ease-in duration-200'>Load More</button>
                }
                
            </div>
            
        </div>
        {
            showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
        }
    </section>
  )
}
export default Portfoilo