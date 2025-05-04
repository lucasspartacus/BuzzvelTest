"use client";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { PageImages } from "./images/PageImages";

import userThumb1 from "./images/UserProfilePics/UserThumb.svg";
import userThumb2 from "./images/UserProfilePics/UserThumb2.svg";
import userThumb3 from "./images/UserProfilePics/UserThumb3.svg";
import userThumb4 from "./images/UserProfilePics/UserThumb4.svg";
import userThumb5 from "./images/UserProfilePics/UserThumb5.svg";

const people = [
  {
    text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    name: "Hellen Jummy",
    role: "Financial Counselor",
    image: userThumb1,
  },
  {
    text: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    image: userThumb2,
  },
  {
    text: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    image: userThumb3,
  },
  {
    text: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    name: "David Oshodi",
    role: "Manager",
    image: userThumb4,
  },
  {
    text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    name: "Charolette Hanlin",
    role: "CEO",
    image: userThumb5,
  },
];

export default function WhatEveryoneSays() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "40px", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[80px] overflow-hidden">
      {/* Title and arrows */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:gap-6 md:mb-12 ">
        <h2 className="md:text-[56px] text-[24px] text-[#0F172A] font-bold ml-0 sm:ml-6">
          What everyone says
        </h2>
        <div className="flex gap-4 sm:mr-6 md:visible invisible">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="group p-2 rounded-full border-[2px] border-orange-600 hover:bg-orange-600 transition -rotate-180"
            aria-label="Previous"
          >
            <PageImages.arrowright className="group-hover:fill-white fill-[#EA580C]"/>
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="group p-2 rounded-full border-[2px] border-orange-600 hover:bg-orange-600 transition"
            aria-label="Next"
          >
            <PageImages.arrowright className="group-hover:fill-white fill-[#EA580C]"/>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {people.map((person, index) => (
          <div key={index} className="p-2 sm:p-4">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 h-full flex flex-col justify-between min-h-[305px] md:w-auto w-[309px]">
              <p className="text-black text-[16px] sm:text-[18px] mb-6">{person.text}</p>

              {/* Profile row */}
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-black text-[16px] sm:text-[18px]">{person.name}</p>
                  <p className="text-[#475569] text-[14px] sm:text-[16px]">{person.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
