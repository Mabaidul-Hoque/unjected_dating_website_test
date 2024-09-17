"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const reviews = [
  {
    id: 1,
    rating: 5,
    title: "Thank you!",
    description:
      "I went on a fantastic first date with a beautiful and brainy Unjected yesterday! We met on the app after we both lost our partners to the jab.",
  },
  {
    id: 2,
    rating: 5,
    title: "Gamechanger",
    description:
      "I've had so many good conversations with a lot of amazing people on here. You'd never get that on Tinder or Hinge.",
  },
  {
    id: 3,
    rating: 5,
    title: "Thankful for this",
    description:
      "It's more than an app. It's a key to find new and better ways for folks like us to live. I come here to find words of encouragement & support",
  },
  {
    id: 4,
    rating: 5,
    title: "It's very good",
    description:
      "It's a very good app. It's a key to find new and better ways for folks like us to live. I come here to find words of encouragement & support",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    if (currentIndex < reviews.length - 1 && !isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsSliding(false);
      }, 100);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsSliding(false);
      }, 100);
    }
  };

  return (
    <div className=" w-full ">
      <div className="max-w-[1440px] mx-auto relative flex flex-col justify-center items-center px-2 sm:px-4 md:px-6 lg:px-20 py-5 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-8 text-center mb-5 sm:mb-7 md:mb-8 lg:mb-10 dark:text-white">
          <h2 className="font-bold text-[32px] md:text-3xl lg:text-5xl xl:text-[52px]">
            Our Success Stories
          </h2>
          <p className="font-normal md:text-lg lg:text-xl">
            Discover how our users found love and meaningful connections
          </p>
        </div>

        <div className=" flex justify-center items-center overflow-hidden w-full">
          <button
            onClick={handlePrev}
            className="hidden lg:block absolute left-[4%] lg:left-[2%] top-[55%] px-3 py-2 rounded"
            disabled={currentIndex === 0 || isSliding}
          >
            <RiArrowLeftSLine
              size={30}
              color={`${
                currentIndex === 0 || isSliding ? "lightgray" : "#1A1A1A"
              }`}
            />
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${reviews.length * 100}%`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 md:px-2 flex items-center justify-center"
              >
                <ReviewCard
                  rating={review.rating}
                  title={review.title}
                  description={review.description}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="hidden lg:block absolute right-[4%] lg:right-[2%] top-[55%] px-3 py-2 rounded"
            disabled={currentIndex === reviews.length - 1 || isSliding}
          >
            <RiArrowRightSLine
              size={30}
              color={`${
                currentIndex === reviews.length - 1 || isSliding
                  ? "lightgray"
                  : "#1A1A1A"
              }`}
            />
          </button>
        </div>

        <div className="flex justify-center items-center gap-3 py-5 md:py-10 dark:text-white">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to review ${idx + 1}`}
              className={`w-[42px] h-[4px] ${
                idx === currentIndex ? "bg-[#F7A293]" : "bg-[#E4E4E4]"
              } cursor-pointer`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
