import { features } from "../constants"
import '../index.css'

const CardDeal = () => {
  return (
    <section className="mt-20">
      <div className="md:flex-row flex flex-col justify-around px-4">
    <div className="flex flex-col flex-wrap gap-4 mb-10 md:mr-6">
      <h2 className="sm:text-[50px] text-[30px] font-poppins">You do the business, <br /> we&apos;ll handle the money</h2>
      <p className="max-w-[500px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, facilis debitis fuga sed blanditiis eaque doloremque perspiciatis iste deserunt!</p>
      <button className="bg-blue-gradient rounded-md px-4 py-3 text-center font-poppins text-black max-w-[140px]">Get Started</button>
    </div>

        <div className="flex flex-col sm:px-0 px-3 items-center gap-5">
          {features.map((feature, index) => (
            <div
            key={index}
            className={`bg-black-gradient sm:w-[500px] lg:w-[700px] w-fit h-fit px-4 py-2 rounded-md flex flex-row my-2 ${index === features.length - 1 ? 'bg-none hover:bg-indigo-500' : 'bg-black-gradient'} `}>
              <img src={feature.icon} alt="" />
              <div className={`flex flex-col ml-5`}>
                <h2 className="font-poppins text-3xl mb-2">{feature.title}</h2>
                <p className="font-poppins text-gradient">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardDeal