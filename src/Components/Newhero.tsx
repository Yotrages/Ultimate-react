import { Hero } from "../constants"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const Newhero = () => {
  

    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }

  return (
    <section>
        <div className="w-full">
        <Slider {...settings}>
          {Hero.map((heros, index) => (
            <div 
            key={index}
            className="w-full h-auto relative">
              <div className="w-full flex relative items-center">
               <img className="w-full sm:h-[650px] h-[350px] object-cover" src={heros.imgUrl} alt="" />
               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                  <h2 className="xs:text-4xl text-3xl font-bold mb-4">{heros.text}</h2>
                  <p className="text-xl mb-6">{heros.description}</p>
                  <button className="bg-blue-gradient hover:bg-black-gradient text-white font-bold py-2 px-4 rounded flex gap-2 items-center">
                    {heros.buttonText} <FaArrowRight />
                  </button>
                </div>
              </div>
              </div>
          ))}
  </Slider>
      </div>
    </section>
  )
}

export default Newhero