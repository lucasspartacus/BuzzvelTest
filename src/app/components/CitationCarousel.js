// components/CitationCarousel.js
"use client";
import Slider from "react-slick";
import Image from "next/image";
import citationBackground from "./images/Citation.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const citations = Array(5).fill({
  text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
  name: "Marie Poirot,",
  company: "Bigapp",
  image: citationBackground,
});

const CitationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="hidden sm:block absolute right-4 top-[30%] transform -translate-y-1/2 z-10 cursor-pointer text-[48px] text-black"
      >
        <IoChevronForward />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="hidden sm:block absolute left-[-5%] top-[30%] transform -translate-y-1/2 z-10 cursor-pointer text-[48px] text-white"
      >
        <IoChevronBack />
      </div>
    );
  }

  return (
    <section className="bg-[#FACC15] 2xl:px-[80px] md:px-[80px] md:h-[575px] h-[684px] relative overflow-visible">
      <div className="2xl:w-[60%]  mx-auto">
        <Slider {...settings} className="citation-carousel">
          {citations.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center relative">
              {/* Left Side */}
              <div className="w-full mt-8 text-[#0F172A] 2xl:w-[42%] md:w-[42%] text-left flex md:px-0 px-[20px] flex-col pt-16">
              <p className="md:text-[24px] text-[18px] mb-4 md:w-[100%] w-[93%]">{item.text}</p>
              <p className="md:text-[24px] text-[18px]">{item.name}</p>
              <p className="md:text-[24px] text-[18px] font-bold">{item.company}</p>
              </div>

              {/* Right Side */}
                <div className="w-full md:w-1/2 relative w-[426px] h-[456px] md:w-[680px] md:h-[707px] z-1">
                <div className="absolute 2xl:right-[-81%] 2xl:top-[-60%] md:right-[-81%] md:top-[-60%] top-[-12%] w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CitationCarousel;
