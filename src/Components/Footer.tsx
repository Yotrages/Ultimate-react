import { footerLinks, socialMedia } from "../constants"
import '../index.css'

const Footer = () => {
  return (
    <section className='mt-20 bg-black-gradient px-0 py-6'>
      <div className=" w-full flex xs:flex-row flex-col justify-around h-fit mb-3">
    {footerLinks.map((footerlink, index) => (
      <div key={index} className="flex flex-col text-center text-white gap-3">
        <h2 className="mb-3 text-xl font-bold sm:text-[26px]">{footerlink.title}</h2>
        <ul className="items-center mb-3">
          {footerlink.links.map((link, index) => (
            <li key={index} className="mb-3">
              <a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}

      </div>
    <div className="w-full flex flex-col text-center text-white">
    
        <div className="border-t border-t-[#5ec1e6] md:w-[800px] sm:w-[600px] w-[300px] mx-auto mb-5"></div>
    
      <p className="mb-8 sm:text-[20px] text-gradient">&copy; 2024 HooBank copyright. All right reserved</p>
      <div className="flex flex-row flex-1 m-auto">
        {socialMedia.map((socials, index) => (
          <div key={index} className="sm:ml-8 ml-5">
            <a href={socials.link} target="_blank" rel="noopener noreferrer">
              <img className="sm:w-8 sm:h-8 h-6 w-6 hover:bg-secondary hover:rounded-full hover:p-1" src={socials.icon} alt={socials.id} />
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Footer