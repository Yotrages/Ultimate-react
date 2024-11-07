import { useState } from "react";
import { FAQ } from "../constants"
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Faq = () => {
    const [toggle, setToggle] = useState<number>(-1)

    const handleClick = (index: number) => {
        setToggle(toggle === index ? -1 : index);
      };
      
  return (
    <section className="mt-28">
            <h2 className="text-2xl font-bold mb-5 text-center">Frequently Asked Questions</h2>
        <div className="bg-primary flex flex-col items-center mb-2 mx-auto">
            {FAQ.map((faq, index) => (
                <div key={index} className="flex flex-col xs:w-[450px] p-3 md:w-[600px] w-[260px] py-4 border-b-[1px] border-gray-400 bg-gray-500">
                    <span className="flex flex-wrap flex-row mb-1  justify-between" onClick={() => handleClick(index)}>
              <p className="font-poppins font-medium text-[16px] mr-1">{faq.question}</p>
              <span className="self-center justify-self-center flex-col">
                  {toggle === index ? (
                    <FaArrowAltCircleDown className="text-[25px]" />
                  ) : (
                    <FaArrowAltCircleUp className="text-[25px]" />
                  )}
              </span>
            </span>
            
            {toggle === index && (
              <div className="py-4 px-6 text-center w-full text-gray-200 bg-gray-600">
                {faq.answer}
              </div>
            )}
                </div>
            ))}
        </div>
    </section>
  )
}

export default Faq