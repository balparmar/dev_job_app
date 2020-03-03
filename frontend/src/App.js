import React from 'react';
import RangeSlider from './components/RangeSlider';
import MainHeader from './components/MainHeader';
import JobCard from './components/JobCard';

// images
import instagram from './instagram.png';

function App() {
  return (
    <div>
      <div className='h-full'>
        <MainHeader className='absolute top-0 sticky z-50' />
        <div className='flex justify-start items-start flex-wrap max-w-6xl mx-auto'>
          <div className='w-full flex justify-center items-center md:w-1/3 p-2 pb-0 lg:p-5 mt-2'>
            <div className='w-full bg-red-500 rounded p-4'>Column 1</div>
          </div>
          <div className='w-full flex justify-center items-center md:w-1/3 p-2 pb-0 lg:p-5 mt-2'>
            <div className='h-40 w-full bg-blue-500 rounded p-4 flex justify-between'>
              <div className='bg-white h-full w-1/3 rounded-md shadow-md flex items-center justify-center'>
                <div className='h-12 w-12'>
                  <img className='h-full w-full' src={instagram} alt='' />
                </div>
              </div>
              <div className='h-32 w-2/3 flex justify-end'>
                <div className='h-full w-95p bg-white rounded'>
                  <div className='w-full py-2 bg-red-500 flex justify-between items-start rounded rounded-b-none'>
                    <div className='pl-2'>SAP</div>
                    <div className='pr-1 flex justify-end'>
                      <p className='text-sm w-2/3'>Full Stack Developer</p>
                    </div>
                  </div>
                  <div className='bg-white flex justify-between items-end pt-1 rounded rounded-t-none'>
                    <div className='pl-2'>
                      <p>Location</p>
                      <p>30mins</p>
                    </div>
                    <div className='pr-2'>
                      <div className='h-10 w-10 rounded-full bg-red-500'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full justify-center items-center md:w-1/3 p-2 pb-0 lg:p-5 mt-2'>
            <div className='w-full bg-pink-300 rounded p-4'>
              Start Adding Here
            </div>
            <div className='w-full bg-pink-500 rounded p-4 mt-4'>
              <RangeSlider />
            </div>
          </div>
          <div className='w-full bg-gray-500 md:w-1/3'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
