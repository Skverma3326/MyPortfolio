import React, {useEffect}  from 'react';
import {Tilt} from 'react-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  
  return (
    <div className='max-w-[1410px] m-auto bg-black '>
      <div className='max-w-[1140px] m-auto bg-black text-white w-full flex flex-col sm:flex-row '>
        <div className=' w-full md:w-1/2 flex flex-col items-start pl-2 md:py-20 py-8'>
        <h2 className='font-semibold text-lg '>Hello, It's Me</h2>
        <p className='text-4xl capitalize font-bold my-1' >sunil kumar</p>
        <h2 className='font-semibold lg:text-lg md:text-base xl:text-xl'>And I'm a   
          <span data-aos="fade-right"
           className='text-yellow-500 pl-1 '>Front End Developer</span></h2>
        <p className='text-justify md:my-4 md:mb-7 mb-1 my-2 w-80 md:w-[350px] lg:w-96  '>I am Web Devloper. I am Skilled in React JS and Knowledge of HTML, CSS and JavaScript and many more....</p>
       
        <button className="bg-yellow-600 border-white border-2 text-black font-bold p-2 rounded drop-shadow-[0_0_15px_rgba(253,224,71,0.6)] hover:drop-shadow-[0_0_20px_rgba(253,224,71,0.8)] transition-shadow duration-200">
  More About Me
</button>


        </div>
    <div className='w-full md:w-1/2 flex items-start justify-start md:items-center pb-10 pt-4 p-2 md:justify-center pl-2 '>
    <Tilt options={defaultOptions} style={{ }}>
    <div data-aos="fade-up-left" className='max-w-[300px] h-[300px] md:max-w-[350px] lg:max-w-[450px] lg:h-[450px] overflow-hidden w-full md:h-[400px] border-yellow-500 border-[20px] rounded-tr-full rounded-tl-full  rounded-bl-full '> 
        <img className='h-full w-full' src="https://tse3.mm.bing.net/th?id=OIP.FME9VmcdhJaV3vGj25-ZigHaHa&pid=Api&P=0&h=220" alt="" />
    </div>

    </Tilt>

     </div>
      </div>
    </div>
  );
}

export default Hero;
