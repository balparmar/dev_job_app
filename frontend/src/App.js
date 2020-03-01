import React from 'react';
import RangeSlider from './components/RangeSlider';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <div className='h-full'>
        <MainHeader className='absolute top-0 sticky z-50' />
        <div className='flex h-full justify-start items-start flex-wrap'>
          <div className='w-full bg-red-500 h-full md:w-1/3'>Column 1</div>
          <div className='w-full bg-blue-500 h-full md:w-1/3'>Column 2</div>
          <div className='w-full bg-gray-500 h-full md:w-1/3'>
            <div className='bg-pink-300 h-2/3 w-full'>Side Column 1</div>
            <div className='bg-pink-300 h-1/3 w-full'>Side Column 2</div>
          </div>
        </div>
      </div>

      {/* <RangeSlider /> */}
    </div>
  );
}

export default App;
