import React from 'react';
import { PageImages } from './images/PageImages';
import Image from 'next/image';
import ColImage from '../components/images/Col.png';

export default function MeetInternationalStudents() {
  return (
    <section className="bg-white md:py-20 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left side*/}
        <div className="w-full md:w-1/2">
          <Image
            src={ColImage}
            alt="International students"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-left relative">
          {/* Airplane moved to top-right corner of text section */}
          <div className="absolute md:top-[-35px] md:right-30 right-42 top-[-10%] animate-flyRight">
            <PageImages.airplane />
          </div>

          {/* Title */}
          <h2 className="md:text-[56px] text-[24px] font-extrabold leading-tight text-[#0F172A] md:w-[110%] w-[100%]">
            Meet international students & teachers
          </h2>

           {/* Subtitle */}
          <p className="mt-6 md:text-[20px] text-[16px] font-normal text-[#0F172A]  md:w-[100%] w-[92%]">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>

          {/* Inline text and icon */}
          <p className="mt-6 text-[20px] font-normal text-[#2563EB] flex items-center gap-2 cursor-pointer">
            Explore teachers and students
            <PageImages.arrowright />
          </p>
        </div>
      </div>
    </section>
  );
}
