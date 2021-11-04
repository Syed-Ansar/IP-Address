import arrow from '../images/icon-arrow.svg';
import { useState } from 'react';

const Form = ({ setIp }) => {
  const [search, setSearch] = useState('');

  const handleInput = (event) => {
    event.preventDefault();
    setIp(search);
    setSearch('');
  };

  return (
    <div>
      <form
        onSubmit={handleInput}
        className='flex flex-row justify-center items-center'
      >
        <input
          type='text'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder='Search for any IP address or Domain'
          className=' my-5 py-4 px-8 md:w-[520px] rounded-l-xl font-light text-gray-900 placeholder-gray-500 text-sm outline-none cursor-pointer'
        />
        <button type='submit'>
          <img src={arrow} alt='arrow' className='bg-black p-5 rounded-r-xl' />
        </button>
      </form>
    </div>
  );
};

export default Form;
