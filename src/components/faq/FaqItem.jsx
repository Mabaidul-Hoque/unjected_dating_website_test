import Image from "next/image";
import React from "react";
import removeImage from "/public/assets/images/remove_icon.svg";
import addImage from "/public/assets/images/add_icon.svg";

const FaqItem = ({ idx, faq, toggleFAQ, faqLength, openIndexes }) => {
  return (
    <div
      key={faq.id}
      className={`${idx < faqLength - 1 ? "border-b pb-4" : "pb-4"}`}
    >
      <div
        onClick={() => toggleFAQ(idx)}
        className="flex justify-start items-center gap-4 "
      >
        {openIndexes.includes(idx) ? (
          <Image
            src={removeImage}
            alt="add icon"
            width={24}
            height={24}
            className=" text-[#cb4932] bg-gradient-to-r from-[#f1442626] to-[#f56b53] bg-clip-text cursor-pointer"
          />
        ) : (
          <Image
            src={addImage}
            alt="add icon"
            width={24}
            height={24}
            className=" text-[#cb4932] bg-gradient-to-r from-[#f1442626] to-[#f56b53] bg-clip-text cursor-pointer"
          />
        )}
        <h2 className="text-base md:text-lg lg:text-xl font-normal bg-gradient-to-r from-[#ec9f9f] to-[#f56b53] text-transparent bg-clip-text">
          {faq.title}
        </h2>
      </div>
      {openIndexes.includes(idx) && (
        <div className="mt-2">
          <p className="text-[#484848] text-sm md:text-base md:pl-10 font-normal">
            {faq.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
