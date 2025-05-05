import React from 'react';
import { PageImages } from './images/PageImages';
import Image from 'next/image';
import ColImage from '../components/images/Col.png';

export default function MeetInternationalStudents() {
  return (
    <section
      className="bg-white md:py-20 py-8 px-6"
      aria-labelledby="international-section-title"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left side: Image */}
        <div
          className="w-full md:w-1/2"
          role="region"
          aria-label="International students and educators"
        >
          <Image
            src={ColImage}
            alt="Diverse group of international students and teachers"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right side: Text */}
        <div className="w-full md:w-1/2 text-left relative">

          {/* Decorative airplane icon */}
          <div
            className="absolute md:top-[-35px] md:right-30 right-43 top-[-6%] animate-flyRight"
            aria-hidden="true"
          >
            <PageImages.airplane />
          </div>

          {/* Heading */}
          <h2
            id="international-section-title"
            className="md:text-[56px] text-[24px] font-extrabold leading-tight text-[#0F172A] md:w-[110%] w-[90%]"
          >
            Meet international students & teachers
          </h2>

          {/* Subtitle */}
          <p className="mt-6 md:text-[20px] text-[16px] font-normal text-[#0F172A] md:w-[100%] w-[92%]">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>

          {/* CTA Link */}
          <a
            href="/community"
            className="mt-6 text-[20px] font-normal text-[#2563EB] flex items-center gap-2 hover:underline"
          >
            Explore teachers and students
            <PageImages.arrowright aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
