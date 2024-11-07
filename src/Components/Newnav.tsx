import {  useState } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';


const Newnav = ({button} : {button: string}) => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, SetDropdown] = useState(false)

  const handleDropdownToggle = () => {
    SetDropdown(!dropdown);
  };
 
  
 
  return (
    <nav>
      <div className="md:h-[80px] w-full flex md:flex-row items-center justify-between h-[80px] px-4">
        <a className="ml-[20px]" href="">
          <img className="max-w-[120px]" src={logo} alt="Logo" />
        </a>

        <ul className="md:flex hidden items-center justify-center flex-1 relative">
          {navLinks.map((navlink, index) => (
            <li
              key={index}
              className={`${
                index !== navLinks.length - 1 ? 'mr-[40px]' : 'mr-0'
              } list-none text-[20px] text-gradient hover:text-[#bef3f5] active:text-[#bef3f5]`}
            >
 {index === 2 ? (
                <div>
                  <button
                    onClick={handleDropdownToggle}
                    className="flex items-center"
                  >
                    {navlink.title}
                    <span className="ml-1">▼</span>
                  </button>
                  {dropdown && (
                    <ul className="absolute bg-black text-white mt-5 w-32  rounded-md shadow-lg z-[1]">
                      <li className="px-2 py-2 hover:bg-[#0a192f] text-white">
                        <Link className='text-white' to="">Sublink 1</Link>
                      </li>
                      <li className="px-4 py-2]">
                        <Link className='text-white' to="">Sublink 2</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#0a192f]">
                        <Link to="">Sublink 3</Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={navlink.path}>{navlink.title}</Link>
              )}            
              </li>
          ))}
        </ul>

          <div className='flex flex-row items-center justify-between'>
              <input type="text" placeholder='search here' className='rounded-lg p-3 text-black md:block hidden mr-1' />
                      <button className='rounded-md bg-blue-gradient py-3 px-3 text-[16px] md:block hidden items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black font-poppins'>
                   {button}
                    </button>
          </div>

        <div className="md:hidden flex items-center">
          <img
            className="p-4 cursor-pointer animate-pulse"
            src={toggle ? close : menu}
            alt="Menu Icon"
            onClick={() => setToggle((prev) => !prev) }
          />
        </div>

        <div 
  className={`md:hidden absolute top-[80px] right-0 w-full bg-[#00040f] rounded-md z-[1] transition-all duration-[1.5s] ease-in-out ${
    toggle ? 'max-h-[300px]' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  <ul className="flex flex-col items-start p-4 space-y-4">
    {navLinks.map((navlink, index) => (
      <li key={index} className="text-[18px] text-[#5ce1e6]">
        <Link to={navlink.path} onClick={() => setToggle(false)}>
          {navlink.title}
        </Link>
      </li>
    ))}
  </ul>
</div>

      </div>
    </nav>
  );
};

export default Newnav;
