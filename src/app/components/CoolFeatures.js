import React from 'react';
import { PageImages } from './images/PageImages';
import Image from 'next/image';
import GroupPeople from '../components/images/Right.png';
import Card from './utils/Card';

export default function CoolFeatures() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
      {/* Right: Image */}
      <div className="w-full md:w-1/2 relative ">
        <Image
            src={GroupPeople}
            alt="Global Opportunities"
            className="md:min-w-[500px] min-w-[600px] h-auto object-contain "
            priority
        />
            <div
                className="absolute z-10 bg-white shadow-lg rounded-lg  items-center justify-center px-[16px] pt-[14px]"
                style={{ width: '225px', height: '232px', top: '10%', left: '6%' }}
            >
                
                <p className="text-[14px] font-normal text-[#0F172A] mt-2  bg-blue-100 px-1 w-[60px] rounded-sm mb-2">
                    Popular
                </p>

                <h2 className=" md:text-[20px] text-[16px] font-medium leading-tight text-[#0F172A] md:w-[100%] w-[85%] z-[10]">
                    Design for how people think
                </h2>

                <p className="md:text-[14px] text-[12px] font-normal text-[#0F172A] mt-2 md:w-[100%] w-[96%]">
                    Aliquam ut euismod condimentum elementum ultricies volutpat sit non. 
                </p>

                <button className="bg-white text-blue-600 border-[2px] border-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition mt-2 w-full rounded-lg">
                    Take Lesson
                </button>
            </div>
        </div>

      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col gap-8 relative">

        <div className="absolute md:left-[53.5%] left-[37%] md:top-[18%] top-[9%] z-[2] animate-reveal">
            <PageImages.dwaingstock1/>
        </div>

        {/* Title */}
        <h2 className="md:text-[56px] text-[24px]  font-extrabold leading-tight text-[#0F172A] w-[110%] z-[10]">
            All the cool features
        </h2>

        {/* Subtitle */}
        <p className="md:text-[20px] text-[16px] font-normal text-[#0F172A] md:w-[100%] w-[95%]">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
        </p>

        {/* CTA Link */}
        <p className="text-[20px] font-normal text-[#2563EB] flex items-center gap-2 cursor-pointer">
            View all the features
            <PageImages.arrowright />
        </p>
        </div>
    </div>
  </section>

  );
}
