import {apple, google, bill } from '../assets'


const Billing = () => {
  return (
    <section className="mt-20">
      <div className="md:flex-row flex flex-col justify-around px-4">
    <div className="flex flex-col flex-wrap gap-4 mb-10 md:mr-6">
      <h2 className="sm:text-[50px] text-[30px] font-poppins">Easily control your <br /> billing & invoicing</h2>
      <p className="max-w-[500px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, facilis debitis fuga sed blanditiis eaque doloremque perspiciatis iste deserunt!</p>
    
      <div className='flex flex-row gap-4'>
      <img src={apple} alt="Apple" />
      <img src={google} alt="Google" />
      </div>

      </div>

       <img className='md:max-w-[500px] px-4' src={bill} alt="Bill" />
      </div>
    </section>
  )
}

export default Billing