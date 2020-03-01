import React from 'react';
import RangeSlider from './components/RangeSlider';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className='bg-red-500 w-screen h-screen'>
       <MainHeader/>
      <RangeSlider />
    </div>
  );
}

export default App;
