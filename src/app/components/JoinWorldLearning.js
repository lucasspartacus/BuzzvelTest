import React from 'react';
import Image from 'next/image';
import CardsRight from './images/CardsRight.png';
import CardsLeft from './images/CardsLeft.png';
import CardsRightReverse from './images/CardsRightReverse.png';
import CardsLeftReverse from './images/CardsLeftReverse.png';

export default function   JoinWorldLearning() {
  return (
    <section className="bg-[#FACC15] py-20 px-6 relative overflow-hidden">
      {/* Left Image */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-0 animate-flyRight">
        <Image 
          src={CardsLeft} 
          alt="Left visual" 
          className="w-[350px] h-auto md:visible invisible" 
        />
      </div>

      {/* Right Image */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-0 animate-flyLeft">
        <Image 
          src={CardsRight} 
          alt="Right visual" 
          className="w-[350px] h-auto md:visible invisible" 
        />
      </div>

      <div className="absolute top-24 left-10 transform -translate-y-1/2 z-0 animate-flyTop">
        <Image 
          src={CardsRightReverse} 
          alt="Left visual" 
          className="w-[350px] h-auto md:invisible visible" 
        />
      </div>

      {/* Right Image */}
      <div className="absolute bottom-[-90px] left-10 transform -translate-y-1/2 z-0 animate-flyBottom">
        <Image 
          src={CardsLeftReverse} 
          alt="Right visual" 
          className="w-[350px] h-auto md:invisible visible" 
        />
      </div>


      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:my-24 my-36">
        <h2 className="md:text-[56px] text-[24px] text-[#0F172A] font-extrabold ">
            Join a world of learning
        </h2>
        <div className='md:w-[65%] w-[90%]'>
          <p className="md:text-[20px] text-[16px] text-[#0F172A]">
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          </p>
          <p className="md:text-[20px] text-[16px] text-[#0F172A]">
              Risus elit et fringilla habitant ut facilisi.
          </p>
        </div>
      
        <button className="bg-[#EA580C] md:text-[24px] text-[20px] text-white md:font-bold font-medium py-3 px-6 rounded-lg md:w-[24%] w-[45%] hover:bg-white hover:text-[#EA580C] transition md:mt-4 mt-2">
         Sign Up Now
        </button>
      </div>
    </section>
  );
}
