import React from 'react';
import RangeSlider from './components/RangeSlider';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <div className='h-full'>
        <MainHeader className='absolute top-0 sticky z-50' />
        <div className='flex justify-start items-start flex-wrap'>
          <div className='w-full flex justify-center items-center md:w-1/3 p-2 pb-0 lg:p-5 lg:mt-2'>
            <div className='w-full bg-red-500 rounded p-4'>Column 1</div>
          </div>
          <div className='w-full flex justify-center items-center md:w-1/3 p-2 pb-0 lg:p-5 mt-2'>
            <div className='w-full bg-blue-500 rounded p-4'>Column 2</div>
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
