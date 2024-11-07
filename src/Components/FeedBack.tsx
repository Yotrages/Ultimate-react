import { feedback } from "../constants"
import { FaArrowAltCircleRight } from "react-icons/fa";

const FeedBack = () => {
  return (
    <section className="mt-20 mb-5">
      <div className="flex justify-around flex-row flex-wrap items-center gap-5">
    {feedback.map((feeds, index) => (
      <div
      key={index}
      className="flex flex-col flex-wrap xs:w-[300px] w-[250px] items-center bg-secondary rounded-md text-black p-4">
        <img className="mb-2" src={feeds.img} alt="peoples" />
        <h1 className="mb-3 font-bold font-poppins text-[20px]">{feeds.title}</h1>
        <p className="mb-3 text-center">{feeds.content}</p>
        <h2 className="text-left text-[#222] italic flex flex-row items-center"><FaArrowAltCircleRight className="mr-2" /> {feeds.name}</h2>
      </div>
    ))}
      </div>
    </section>
  )
}

export default FeedBack