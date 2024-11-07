import { FaArrowAltCircleRight } from 'react-icons/fa'
import { card } from '../assets'
import '../index.css'


const Business = () => {
  return (
    <section className="mt-20">
      <div className="md:flex-row flex flex-col justify-around px-4">
    <div className="flex flex-col flex-wrap gap-4 mb-10 md:mr-6">
      <h2 className="sm:text-[50px] font-poppins text-[30px]">Find a better card deal <br /> in few easy steps</h2>
      <p className="max-w-[500px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, facilis debitis fuga sed blanditiis eaque doloremque perspiciatis iste deserunt!</p>
      <button className="bg-blue-gradient rounded-md px-4 py-3 text-center font-poppins text-black max-w-[160px] flex items-center">Get Started <FaArrowAltCircleRight className='ml-2'/></button>
      </div>

      <img className='md:max-w-[500px] px-4' src={card} alt="Card" />

      </div>
    </section>
  )
}

export default Business