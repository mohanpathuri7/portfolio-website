import portfolios from "../../assets/data/portfolioData";

const Modal = ({activeID, setShowModal}) => {
    const porfoilo = portfolios.find(portfolio => portfolio.id === activeID)
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-headingColor bg-opacity-40 ">
        <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
            <div>
                <figure>
                    <img className="rounded-[8px]" src={porfoilo.imgUrl} alt={porfoilo.title} />
                </figure>
            </div>
            <div>
                <h2 className="text-2xl text-headingColor font-[700] my-5">{porfoilo.title}</h2>
                <p className="text-[15px] leading-7 text-smallTextColor ">{porfoilo.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3">
                <h4 className="text-headingColor text-[17px] font-[600]">Technologies :</h4>
                {
                    porfoilo.technologies.map((item, index)=> (
                        <span key={index} className="px-2 py-1 bg-gray-200 rounded-[5px] text-[14px] leading-0 font-[100]">{item}</span>
                    ))
                }
            </div>
            <a href={porfoilo.siteUrl}>
                <button className="px-4 py-2 my-5 text-white bg-primaryColor rounded-[8px] font-[400] hover:bg-headingColor ease-in duration-300">Live Site </button>
            </a>
            </div>
            <button onClick={()=>setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px]  flex items-center justify-center rounded-[3px] leading-[25px] cursor-pointer">&times;</button>
        </div>
        
    </div>
  )
}
export default Modal