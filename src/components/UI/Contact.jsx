

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.1rem] mb-6">Get in touch</h2>
        <div className="items-center justify-between md:flex">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
              <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928788.74437232!2d58.087159950000014!3d12.916433100000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150e413b549d%3A0x24ddb1c1c2c81592!2sValtech!5e0!3m2!1sen!2sin!4v1732623516157!5m2!1sen!2sin" className="w-full h-full border-0"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full">
              <div className="mb-5">
                <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-[5px]  focus:outline-none" />
              </div>
              <div className="mb-5">
                <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-[5px]  focus:outline-none" />
              </div>
              <div className="mb-5">
                <input type="text" placeholder="Subject" className="w-full p-3 rounded-[5px]  focus:outline-none" />
              </div>
              <div className="mb-5">
                <textarea type="text" rows={3} placeholder="Write your message" className="w-full p-3 rounded-[5px]  focus:outline-none" />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-primaryColor text-center ease-linear duration-150">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact