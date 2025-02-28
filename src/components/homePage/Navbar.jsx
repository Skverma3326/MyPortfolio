import React, { useState } from 'react';
import { NAVBAR_LIST } from '../common/Helper';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../common/Icon';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const valueChange = () => {
    setOpen(!open);
  };

  return (
    <div className='max-w-[1410px] m-auto bg-gray-950'>

      <div className='max-w-[1140px] m-auto bg-gray-950'>
        <div className='max-w-[1140px] py-5 px-2 w-full flex items-center justify-between'>
          <h1 className='text-white text-3xl'>
            Port<span className='bg-gradient-to-r from-purple-500 to-red-300 text-transparent bg-clip-text'>folio</span>
          </h1>
          <div className='max-w-[800px] hidden md:flex w-full h-5 items-center justify-evenly'>
            {NAVBAR_LIST.map((obj, i) => (
              <Link
                key={i}
                to={obj.url}
                className='capitalize text-white text-lg hover:bg-gradient-to-r from-purple-500 to-blue-300 hover:text-transparent hover:bg-clip-text relative after:absolute after:h-[2px] after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:bg-gradient-to-r  after:from-purple-500 after:to-blue-300 after:duration-200'
              >
                {obj.title}
              </Link>
            ))}
          </div>
          <p onClick={valueChange} className='md:hidden  block bg-white p-2'>
            <MenuIcon />
          </p>
        </div>
        <div
          className={`h-full w-full flex items-center justify-center mt-2  bg-black  ${open ? 'flex' : 'hidden'}`}
        >
          <div className='w-[150px] pb-10 h-full flex flex-col gap-10 justify-evenly'>
            {NAVBAR_LIST.map((obj, i) => (
              <Link
                key={i}
                to={`/${obj.title}`}
                className='capitalize text-white  hover:bg-gradient-to-r from-purple-500 to-blue-300 hover:text-transparent hover:bg-clip-text relative  text-2xl after:absolute after:h-[2px] after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:bg-gradient-to-r  after:from-purple-500 after:to-blue-300 after:duration-500'
              >
                {obj.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [ click , setClick] =useState(false)

//   return (
//     <div className='max-w-[1140px] m-auto '>
//         <div className='w-[1140px] m-auto p-4 pr-9 py-6 bg-black text-white flex justify-between items-center '>
//       <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Hisar </h1>
//       <div  className=' hidden lg:flex lg:text-xl bg-blue-400 items-center justify-between gap-16 '>
//       <Link to={"#"}>Home</Link>
//       <Link to={"#"}>about</Link>
//       <Link to={"#"}>contact us</Link>
//       <Link to={"#"}>services</Link>
//       </div>
//       <div className='hidden gap-3 lg:flex '>
//         <button>login </button>
//         <button>sign up </button>
//       </div>
//       <button className='lg:hidden bg-blue-600 p-2 flex'>open</button>
      
//         </div>
//     </div>
//   );
// }

// export default Navbar;
