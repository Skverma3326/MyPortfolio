import React from 'react';
import { ABOUT_CARDS } from '../common/Helper';

const About = () => {
  return (
    <div className='max-w-[1410px] m-auto bg-black'>
    
    <div className="max-w-[1140px] m-auto  bg-black" >
    <h1 className='bg-gradient-to-r from-purple-500 to-red-300 text-transparent bg-clip-text text-start py-10 text-3xl sm:text-5xl lg:text-6xl font-semibold '>About me</h1>
      <div className='max-w-[1140px] place-items-center grid md:grid-cols-3 sm:grid-cols-2 m-auto p-4 gap-10 bg-black'>

      {ABOUT_CARDS.map((obj,i)=>{
        return(
          <div
  data-aos="fade-up-right"
  className="relative max-w-[350px] min-h-[240px] p-2 text-black bg-gradient-to-r from-purple-400 to-blue-400
    hover:drop-shadow-[0_0_20px_rgba(219,112,219,0.8)] flex flex-col items-center justify-center
    rounded-2xl gap-5 overflow-hidden ">
  {/* Spinning Border */}
  <div
    className="absolute inset-0 z-0 rounded-2xl bg-[conic-gradient(transparent,transparent,#00a6ff)] 
      animate-spin border-[6px] border-transparent"
  >
  </div>
  
  {/* Card Content */}
  <div className="relative z-10 flex flex-col gap-5 items-center justify-center bg-gradient-to-r from-purple-500 to-blue-300 w-full h-full p-6 rounded-2xl">
    <img src={obj.icon} className="h-14 w-14 rounded-full bg-blue-700" />
    <i className="text-2xl capitalize font-sans">{obj.title}</i>
    <p className="text-justify">{obj.from}</p>
  </div>
</div>

        )
      })}
      </div>
    </div>
    </div>
  );
}

export default About;
