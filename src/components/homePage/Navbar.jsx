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
            Port<span className='text-yellow-500'>folio</span>
          </h1>
          <div className='max-w-[800px] hidden sm:flex w-full h-5 items-center justify-evenly'>
            {NAVBAR_LIST.map((obj, i) => (
              <Link
                key={i}
                to={`/${obj.title}`}
                className='capitalize text-white text-lg hover:text-yellow-600 relative after:absolute after:h-[2px] after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:bg-yellow-600 after:duration-200'
              >
                {obj.title}
              </Link>
            ))}
          </div>
          <p onClick={valueChange} className='sm:hidden block bg-white p-2'>
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
                className='capitalize text-white  hover:text-yellow-600 relative  text-2xl after:absolute after:h-[2px] after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:bg-yellow-600 after:duration-500'
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
