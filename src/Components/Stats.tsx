import { stats } from "../constants"


const Stats = () => {
  return (
    <section className="mt-20">
      <h1 className="font-poppins font-bold text-3xl sm:text-5xl text-center mb-8">Testimonials</h1>
        <div className="flex flex-row items-center justify-around flex-wrap gap-4">
          {stats.map((stat, index) => (
            <div
            className="flex items-center flex-col"
            key={index}>
                <h2 className="font-poppins md:text-[25px] lg-[25px] text-secondary">{stat.value}</h2>
                <h1 className="font-poppins md:text-[30px] lg-[35px] mb-4">{stat.title}</h1>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Stats;