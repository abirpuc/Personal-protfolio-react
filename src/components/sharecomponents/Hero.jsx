import React from 'react';

const Hero = () => {
    return (
        <div  className='text-white'>
          <div className="text-center h-screen w-full mx-auto flex flex-col mt-28">
            <p className='text-[#00df9a] text-xl font-bold'>Growing With Data Analytics</p>
            <h1 className='mt-2 md:text-7xl sm:text-6xl text-4xl font-bold md-py-4'>Grow with Data.</h1>
            <div className='mt-2 text-xl'>
                <p>Fast, flexible financing for</p>
                
            </div>
            <p className='mt-2 text-xl text-gray-500 font-bold'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
            <button className='mt-3 uppercase -tracking-2 bg-[#00df9a] p-2 w-[200px] rounded-md mx-auto hover:bg-[#10a87b] font-bold'>Get Start</button>
          </div>
        </div>
    );
};

export default Hero;