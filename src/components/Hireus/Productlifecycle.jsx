import React from 'react';
import LifeCycle from './../../assets/imgs/Hireus/lifecycle.png'


export default function HowWeWork() {
  return (
    <div className="min-h-screen  px-4 py-8 md:px-16 lg:px-24 font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        <h2 className="text-sm font-medium text-gray-500 ">How We Work</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl   mt-13  font-lufga  text-gray-900 max-w-xl leading-[150%] md:text-left md:leading[130%] text-left">
          Here’s a refined and complete version of your statement that improves flow, clarity, and impact:
        </h1>
      </div>

      {/* Center Section */}
      <div className="relative mt-0 md:mt-20 w-full max-w-sm md:max-w-5xl h-[500px] mx-auto">
        {/* Center Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src={LifeCycle}
            alt="Product Life Cycle"
            className="w-48 h-48 md:w-80 md:h-80"
          />
        
        </div>

        {/* Circular Labels */}
        {/* Left side */}
        <div className="absolute md:bottom-90 bottom-80 md:left-50 text-left w-40">
          <p className='md:text-lg text-md '>UI/UX Prototyping<br />Wireframes</p>
        </div>
        <div className="absolute md:bottom-60  bottom-50 md:left-30 transform -translate-y-1/2 text-left w-40">
          <p className='md:text-lg text-md'>Cost<br />Optimisation</p>
        </div>
        <div className="absolute md:bottom-30 bottom-29 md:left-50  text-left w-40">
          <p className='md:text-lg text-md'>Testing and release<br />automation</p>
        </div>

        {/* Right side */}
        <div className="absolute md:bottom-90 bottom-80 md:right-50 right-0 text-right w-40">
          <p className='md:text-lg text-md'>Cloud adoption<br />strategy</p>
        </div>
        <div className="absolute md:bottom-60 bottom-50 md:right-30 right-0 transform -translate-y-1/2 text-right w-40">
          <p className='md:text-lg text-md'>Applications<br />Development</p>
        </div>
        <div className="absolute md:bottom-30 bottom-29 right-0 md:right-50 text-right w-40">
          <p className='md:text-lg text-md'>Continuous integration-<br />Delivery/DevOps</p>
        </div>
      </div>
    </div>
  );
}
