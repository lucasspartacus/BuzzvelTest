import React from 'react';
import { PageImages } from './images/PageImages';
import Image from 'next/image';
import VideoImage from '../components/images/VideoImage.png';

export default function AnAllInOneApp() {
  return (
    <section className="bg-white md:py-20 pb-32 pt-2 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
        {/* Background Image Container */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={VideoImage}
            alt="Background"
            className="min-w-[120%] min-h-[120%]"
            priority
          />

          <div className="absolute inset-0 flex  flex-row mt-[300px] justify-center items-center gap-4">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-[225px] h-[232px]">
              <p className="text-[14px] font-normal text-purple-800 mt-2 bg-purple-100 px-1 w-[65px] rounded-sm mb-2">
                Featured
              </p>
              <h2 className="md:text-[20px] text-[16px] font-medium leading-tight text-[#0F172A]">
                The map of <br /> mathematics
              </h2>
              <p className="md:text-[14px] text-[12px] font-normal text-[#0F172A] mt-2 md:w-[100%] w-[83%]">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </p>
              <button className="bg-white text-blue-600 border-[2px] border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition mt-2 w-full">
                Take Lesson
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-[225px] h-[232px]">
              <p className="text-[14px] font-normal text-blue-800 mt-2 bg-blue-100 px-1 w-[60px] rounded-sm mb-2">
                Popular
              </p>
              <h2 className="md:text-[20px] text-[16px] font-medium leading-tight text-[#0F172A]">
                Design for how <br /> people think
              </h2>
              <p className="md:text-[14px] text-[12px] font-normal text-[#0F172A] mt-2 md:w-[100%] w-[90%]">
                Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
              </p>
              <button className="bg-white text-blue-600 border-[2px] border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition mt-2 w-full">
                Take Lesson
              </button>
            </div>

            {/* Card 3 */}
            <div className="hidden md:block bg-white shadow-lg rounded-lg p-4 w-[225px] h-[232px]">
              <p className="text-[14px] font-normal text-green-800 mt-2 bg-green-100 px-1 w-[40px] rounded-sm mb-2">
                New
              </p>
              <h2 className="text-[20px] font-medium leading-tight text-[#0F172A]">
                International & <br /> commercial law
              </h2>
              <p className="text-[14px] font-normal text-[#0F172A] mt-2">
                Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.
              </p>
              <button className="bg-white text-blue-600 border-[2px] border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition mt-2 w-full">
                Take Lesson
              </button>
            </div>
          </div>
        </div>

        {/* Left-side */}
        <div className="w-full md:w-1/2 text-left flex flex-col gap-8 relative">
          <div className="absolute md:left-[15%] left-[10%] md:top-[14%] top-[4.5%]  z-[2] animate-reveal">
            <PageImages.dwaingstock3 />
          </div>

          {/* Title */}
          <h2 className="md:text-[56px] text-[24px] font-extrabold leading-tight text-[#0F172A] w-[100%] z-[10]">
            An all-in-one app that makes it easier
          </h2>

           {/* Subtitle */}
          <p className='text-[16px] md:hidden text-[#0F172A]'> Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
          <br/>Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse. </p>

           {/* Right Side */}
          <ul className="space-y-4">
            {[
              'Est et in pharetra magna adipiscing ornare aliquam.',
              'Tellus arcu sed consequat ac velit ut eu blandit.',
              'Ullamcorper ornare in et egestas dolor orci.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[#0F172A] text-[20px]">
                <PageImages.inlinecheckicon/>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Link */}
          <p className="text-[20px] font-normal text-[#2563EB] flex items-center gap-2 cursor-pointer">
            Find more about the app
            <PageImages.arrowright />
          </p>
        </div>
      </div>
    </section>
  );
}
