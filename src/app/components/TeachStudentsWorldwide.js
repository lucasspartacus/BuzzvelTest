import React from 'react';
import Image from 'next/image';
import ChatImage from '../components/images/ChatImage.png';
import { PageImages } from './images/PageImages';

export default function TeachStudentsWorldwide() {
  return (
    <section className="bg-white py-20 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
        
        {/* Right: Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={ChatImage}
            alt="Global Opportunities"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-left flex flex-col gap-8 relative md:ml-12">
          
          {/* Positioned Decorative Image */}
          <div className="absolute top-[9%] md:top-[13.5%] left-[-0.1%] z-10 animate-reveal">
            <PageImages.dwaingstock2 />
          </div>

          {/* Title */}
          <h2 className="text-[40px] md:text-[72px] font-extrabold leading-tight text-[#0F172A] z-20 w-[110%]">
            Teach students worldwide
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[20px] font-normal text-[#0F172A] w-[80%] md:w-full">
            Amet nunc diam orci duis ut sit diam arcu, nec. <br className="hidden md:inline" />
            Eleifend proin massa tincidunt viverra lectus pulvinar. <br className="hidden md:inline" />
            Nunc ipsum est pellentesque turpis ultricies.
          </p>

          {/* CTA Link */}
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <button className="text-white bg-orange-600 font-bold text-[16px] md:text-[24px] px-4 py-2 h-[48px] md:h-[64px] rounded-lg hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600 transition w-[38%] md:w-[45%]">
              Sign Up Now
            </button>
            <p className="flex items-center gap-2 text-[#2563EB] font-normal text-[20px] cursor-pointer w-[45%]">
              <PageImages.viewdemo />
              View Demo
            </p>
          </div>

          {/* Trusted by */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:mt-8 gap-4">
            <p className="text-[16px] font-normal text-gray-600 flex items-center gap-2 cursor-pointer ml-2 md:ml-0 whitespace-nowrap md:whitespace-normal">
              Trusted by <br className="hidden md:inline" />
              leading companies
            </p>
            <PageImages.leadingcompanies />
          </div>

        </div>
      </div>
    </section>
  );
}
