import React from "react";
import friendsImage01 from "/public/assets/images/event-images/meet-with-friends-img-01.png";
import friendsImage02 from "/public/assets/images/event-images/meet-with-friends-img-02.png";
import iPhone15pro from "/public/assets/images/event-images/meet-with-friends-img-03.png";
import photoCollage1 from "/public/assets/images/event-images/meet-with-friends-img-04.png";
import photoCollage4 from "/public/assets/images/event-images/meet-with-friends-img-05.png";
import friendsImage03 from "/public/assets/images/event-images/meet-with-friends-img-06.png";
import ImageCard from "./ImageCard";

function ResponsiveLayout() {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 py-5 md:py-10 lg:py-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <div className="w-full grid grid-cols-2 gap-4 h-full">
            <div className="w-full flex flex-col items-center justify-between gap-2 xl:gap-4 h-full">
              <ImageCard
                imageUrl={""}
                description="Expand your circle,  one friend at a time"
                px="4"
                py="5"
              />
              <ImageCard
                imageUrl={friendsImage01}
                description="friendsImage01"
              />
              <ImageCard
                imageUrl={friendsImage02}
                description="friendsImage02"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-2 lg:gap-4 h-full">
              <ImageCard
                imageUrl={iPhone15pro}
                description="iPhone15pro"
                px="4"
                pt="5"
              />
              <ImageCard
                imageUrl={""}
                description={
                  <>
                    Meet friends, share laughs -{" "}
                    <span className="text-[#F7A293] font-bold">Unjected</span>{" "}
                    is your social hub
                  </>
                }
                px="4"
                py="5"
              />
            </div>
          </div>
          <div className="grid grid-cols-2  gap-4 xl:gap-4 h-full">
            <div className="flex flex-col items-center justify-between gap-2">
              <ImageCard imageUrl={photoCollage1} description="photoCollage1" />
              <ImageCard
                imageUrl={""}
                description={
                  <>
                    Switch to{" "}
                    <span className="text-[#F7A293] font-bold">dating</span> and
                    find your match
                  </>
                }
                px="4"
                py="5"
              />
              <ImageCard imageUrl={photoCollage4} description="photoCollage4" />
            </div>
            <div className="flex flex-col items-center justify-between gap-2">
              <ImageCard
                imageUrl={""}
                description={
                  <>
                    Discover true romance with{" "}
                    <span className="text-[#F7A293] font-bold">Unjected’s</span>{" "}
                    is dating possibilities.
                  </>
                }
                px="4"
                py="5"
              />
              <ImageCard
                imageUrl={friendsImage03}
                description="friendsImage03"
                px="4"
                pt="5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveLayout;
