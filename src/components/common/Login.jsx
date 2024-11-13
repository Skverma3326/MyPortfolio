import React, { useRef, useState } from 'react';

const Login = () => {
  // Initialize state to store multiple login entries
  const [logins, setLogins] = useState([]);

  // Create refs for all input fields
  const usrName = useRef();
  const usrEmail = useRef();
  const usrNumber = useRef();
  const usrPassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the values from the refs
    const name = usrName.current.value;
    const email = usrEmail.current.value;
    const number = usrNumber.current.value;
    const password = usrPassword.current.value;

    // Update the state with the new login entry
    setLogins((prevLogins) => [
      ...prevLogins,
      { name, email, number, password }
    ]);

    // Clear input fields after submission
    usrName.current.value = '';
    usrEmail.current.value = '';
    usrNumber.current.value = '';
    usrPassword.current.value = '';
  };

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <form onSubmit={handleSubmit} className='p-5 w-[400px] bg-red-500 flex flex-col gap-5'>
        {/* Name input */}
        <input
          type="text"
          className='p-2 outline-none'
          ref={usrName}
          placeholder='Enter your name'
        />
        {/* Email input */}
        <input
          type="email"
          className='p-2 outline-none'
          ref={usrEmail}
          placeholder='Enter your email'
        />
        {/* Number input */}
        <input
          type="tel"
          className='p-2 outline-none'
          ref={usrNumber}
          placeholder='Enter your number'
        />
        {/* Password input */}
        <input
          type="password"
          className='p-2 outline-none'
          ref={usrPassword}
          placeholder='Enter your password'
        />
        <button type='submit' className='p-2 bg-blue-500 text-white'>Submit</button>
      </form>

      {/* Display entered data */}
      <div className='mt-5 min-w-fit flex '>
        <h2 className='text-lg font-bold mb-3'>Login Entries:</h2>
        {logins.length > 0 ? (
          logins.map((login, index) => (
            <div key={index} className='bg-gray-100 p-3 my-2 rounded'>
              <p className='p-2  border flex justify-between  '><strong className=' mx-2 border-[1px] p-1 border-black'>Name:</strong> {login.name || 'Not entered'}</p>
              <p className='p-2  border flex justify-between  '><strong className=' mx-2 border-[1px] p-1 border-black'>Email:</strong> {login.email || 'Not entered'}</p>
              <p className='p-2  border flex justify-between  '><strong className=' mx-2 border-[1px] p-1 border-black'>Number:</strong> {login.number || 'Not entered'}</p>
              <p className='p-2  border flex justify-between  '><strong className=' mx-2 border-[1px] p-1 border-black'>Password:</strong> {login.password ? '******' : 'Not entered'}</p>
            </div>
          ))
        ) : (
          <p>No entries yet.</p>
        )}
      </div>
    </div>
  );
};

export default Login;
