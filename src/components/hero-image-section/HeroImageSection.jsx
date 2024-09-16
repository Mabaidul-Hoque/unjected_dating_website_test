import Image from "next/image";
import React from "react";
import heroImage from "/public/assets/images/hero-image.svg";

const HeroImageSection = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Image
        className="w-full"
        src={heroImage}
        height={"100%"}
        alt="hero-image"
        width={"100%"}
      />

      {/* Text Container */}
      <div className="absolute inset-0 flex flex-col justify-end items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-white text-center px-auto mb-4 md:mb-12 lg:mb-24">
        <h1 className=" font-bold text-2xl xs:text-3xl md:text-[48px] lg:text-[56px] max-w-md  md:max-w-xl lg:max-w-4xl xl:max-w-7xl leading-8 sm:leading-10 md:leading-[50px] lg:leading-[70px] px-1 sm:px-4">
          The World's First <span className="text-[#F7A293]">Unvaccinated</span>{" "}
          Platform
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-60 md:max-w-xl lg:max-w-4xl">
          Love, Friendship and Community connections since 2021
        </p>
      </div>
    </div>
  );
};
export default HeroImageSection;
