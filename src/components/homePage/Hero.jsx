import React, {useEffect}  from 'react';
import {Tilt} from 'react-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
  {/* https://sunil-verma-f0o0k0gsk-sunil-kumar-s-projects.vercel.app */}
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
      <div className='max-w-[1140px] m-auto py-[72px] bg-black text-white w-full flex flex-col items-center  md:flex-row'>
        <div className='w-full  md:w-1/2  pl-2  py-8 flex justify-center md:justify-start  '>
        <div className="w-[300px] max-w-[600px] flex flex-col gap-4 items-start p-4 sm:p-8 md:p-0  border-[0.5px] border-white py-2 md:border-0 break-words box-border">
  <h2 className="font-semibold text-lg">Hello, It's Me</h2>
  <p className="text-4xl capitalize font-bold my-1">Sunil Kumar</p>
  <h2 className="font-semibold lg:text-lg md:text-base xl:text-xl">
    And I'm a
    <span
      data-aos="fade-right"
      className="bg-gradient-to-r from-purple-500 to-red-300 text-transparent bg-clip-text pl-1"
    >
      Front End Developer
    </span>
  </h2>
  <p className="text-justify text-wrap  text-sm md:text-base lg:w-96 break-words">
    I am a Web Developer. I am skilled in React JS and have knowledge of HTML,
    CSS, and JavaScript, and many more....
  </p>
  <button className="bg-gradient-to-r from-purple-500 text-white to-blue-500 border-white border-2  font-bold p-2 rounded drop-shadow-[0_0_15px_rgba(253,224,71,0.6)] hover:drop-shadow-[0_0_20px_rgba(253,224,71,0.8)] transition-shadow duration-200">
    More About Me
  </button>
</div>
        </div>
    <div className='w-full md:w-1/2 flex items-start justify-center md:items-center pb-10 pt-4 p-2 md:justify-center pl-2 '>
    <Tilt options={defaultOptions} style={{ }}>
    <div
  data-aos="fade-up-left"
  className="relative p-[5px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-tr-full rounded-tl-full rounded-bl-full animate-gradient-border bg-[length:200%_200%]"
>
  <div
    className="max-w-[320px] h-[320px] sm:max-w-[350px] sm:h-[350px] md:max-w-[350px] lg:max-w-[450px] lg:h-[450px] overflow-hidden w-full md:h-[400px] bg-white rounded-tr-full rounded-tl-full rounded-bl-full"
  >
    <img
      className="h-full w-full"
      src="https://tse3.mm.bing.net/th?id=OIP.FME9VmcdhJaV3vGj25-ZigHaHa&pid=Api&P=0&h=220"
      alt=""
    />
  </div>
</div>

    </Tilt>

     </div>
      </div>
    </div>
  );
}

export default Hero;
