import React from 'react';
import { PageImages } from './images/PageImages';
import Image from 'next/image';
import VideoImage from '../components/images/VideoImage.png';
import Card from './utils/Card.js'

export default function AnAllInOneApp() {
  return (
    <section
      className="bg-white md:py-20 pb-32 pt-2 px-6 overflow-hidden"
      aria-labelledby="app-section-title"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
        
        {/* Image and Cards */}
        <div className="w-full md:w-1/2 relative" role="region" aria-label="Course previews">
          <Image
            src={VideoImage}
            alt="Student learning through app interface"
            className="min-w-[120%] min-h-[120%]"
            priority
          />

          <div className="absolute inset-0 flex flex-row mt-[300px] justify-center items-center gap-4">
            {/*cards*/}
            <Card
              label="Featured"
              labelColor="purple"
              title="The map of mathematics"
              description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            />
            <Card
              label="Popular"
              labelColor="blue"
              title="Design for how people think"
              description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
            />
            <Card
              label="New"
              labelColor="green"
              title="International & commercial law"
              description="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
              hiddenOnMobile
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-left flex flex-col gap-8 relative">
          <div
            className="absolute md:left-[15%] left-[10%] md:top-[14%] top-[4.5%] z-[2] animate-reveal"
            aria-hidden="true"
          >
            <PageImages.dwaingstock3 />
          </div>

          {/* Heading */}
          <h2
            id="app-section-title"
            className="md:text-[56px] text-[24px] font-extrabold leading-tight text-[#0F172A] w-[100%] z-[10]"
          >
            An all-in-one app that makes learning easier
          </h2>

          {/* Description */}
          <p className="text-[16px] md:hidden text-[#0F172A]">
            Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse nec lorem mauris.
            <br />
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>

          {/* Feature List */}
          <ul className="space-y-4">
            {[
              'Est et in pharetra magna adipiscing ornare aliquam.',
              'Tellus arcu sed consequat ac velit ut eu blandit.',
              'Ullamcorper ornare in et egestas dolor orci.',
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-[#0F172A] text-[20px]"
              >
                <PageImages.inlinecheckicon aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/about"
            className="text-[20px] font-normal text-[#2563EB] flex items-center gap-2 hover:underline"
          >
            Find more about the app
            <PageImages.arrowright aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}