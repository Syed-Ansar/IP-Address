import { useContext } from 'react';
import { DataContext } from '../App';

const Card = () => {
  const info = useContext(DataContext);
  const { ip, location, isp } = info;
  return (
    <div className='font-rubik font-normal text-center mt-10 mx-auto z-10'>
      <div className='text-black bg-white w-[310px] md:w-[600px] lg:w-[800px] xl:w-[1150px] rounded-xl p-5 shadow-xl flex flex-col md:flex-row md:py-8 md:pl-2 md:px-6 lg:px-10 justify-between '>
        <div className=' pl-2 px-2'>
          <div className='card md:text-[10px]'>ip address</div>
          <div className='md:text-[20px]'>{ip ? ip : '8.8.8.8'}</div>
        </div>
        <div className='vl hidden md:inline-block'></div>
        <div className=' pl-1.5 px-2'>
          <div className='card md:text-[10px]'>location</div>
          <div className='md:text-[20px]'>
            {location && location.region ? location.region : 'United States'}
          </div>
        </div>
        <div className='vl hidden md:inline-block'></div>
        <div className='pl-1.5 px-2'>
          <div className='card md:text-[10px]'>timezone</div>
          <div className='md:text-[20px]'>
            {location && location.timezone ? location.timezone : '-07:00'}
          </div>
        </div>
        <div className='vl hidden md:inline-block'></div>
        <div className='pl-1.5 px-2'>
          <div className='card md:text-[10px]'>isp</div>
          <div className='md:text-[20px]'>{isp ? isp : 'Google LLC'}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
