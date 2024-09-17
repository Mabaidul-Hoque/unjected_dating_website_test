"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Meetimg1 from "/public/assets/images/event-images/meeting_img_01.png";
import Meetimg2 from "/public/assets/images/event-images/meeting_img_02.png";
import Meetimg3 from "/public/assets/images/event-images/meeting_img_03.png";
import { useGlobalData } from "@/contexts/GlobalDataProvider";

const Speeddating = () => {
  const { screenSize } = useGlobalData();
  return (
    <div className="w-full ">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-10 md:gap-20 p-4 py-10 lg:py-16 md:px-10">
        <div className="w-full text-left sm:text-center sm:px-20 md:px-0">
          <p className="text-xs md:text-base lg:text-xl text-[#F7A293] font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5">
            SPEED DATING
          </p>
          <p className="w-full text-[32px] md:text-3xl lg:text-5xl xl:text-[52px] font-bold mb-4 leading-8 lg:leading-[63px] dark:text-white">
            {screenSize < 640 ? (
              "Meet, Engage, Connect Dive into Our  Events!"
            ) : (
              <>
                Meet Genuine Connections: <br />
                Dive into Our Exciting Events!
              </>
            )}
          </p>
          <p className="text-sm md:text-base lg:text-xl sm:px-10 md:px-20 lg:px-40 dark:text-white">
            Step beyond the screen and connect in real life! Our exclusive
            events allow you to meet and mingle with other members in a relaxed,
            social setting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center gap-3 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
            <Image
              src={Meetimg1}
              alt="Speak to new potential matches"
              className="w-full h-full px-14 lg:px-16 pt-9 lg:pt-8"
            />
            <div className="flex flex-col gap-2 px-4 pb-14 md:pb-8">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-2">
                Speak to new potential matches
              </p>
              <p className="text-sm md:text-base lg:text-lg  text-center">
                You’ll have various Events to attend to connect and get to know
                each other.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
            <Image
              src={Meetimg2}
              alt="Video or voice - it’s your choice"
              className="w-full h-full px-14 lg:px-16 pt-9 lg:pt-8"
            />
            <div className="flex flex-col gap-3 px-4 pb-14 md:pb-8">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-2">
                Video or voice - it’s your choice
              </p>
              <p className="text-sm md:text-base lg:text-lg text-center  leading-5">
                Calls will always begin with voice. If the call is going well,
                take it to the next level with video.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
            <Image
              src={Meetimg3}
              alt="You’re in control of each call"
              className="w-full h-full px-14 lg:px-16 pt-9 lg:pt-8"
            />
            <div className="flex flex-col gap-3 px-4 pb-14 md:pb-8">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-2">
                You’re in control of each call
              </p>
              <p className="text-sm md:text-base lg:text-lg text-center leading-5">
                You decide what happens during each call. If you both like each
                other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speeddating;
