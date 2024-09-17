"use client";
import { useGlobalData } from "@/contexts/GlobalDataProvider";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    id: 1,
    title: "Is Unjected a dating app?",
    description:
      "Yes, and more! Unjeced was desgined for Love, friendship & community. Curate your experience based on what your looking for.",
  },
  {
    id: 2,
    title: "How do you make sure members are unvaccinated?",
    description:
      "Since the beginning, Unjected has believed the healthiest realtionships have a foundation of trust, and we have operated on an honor system. However, for our members who want the most safety and security in choosing their future partner, we recommend our 'Unjected Verified' upgrade. Unjected verified members attest to their unvaccination by affidavit.",
  },
  {
    id: 3,
    title: "Do you sell data?",
    description: "No, Unjected will never sell your data to anyone.",
  },
  {
    id: 4,
    title: "Is it just for covid-19 unvaccinated or all vaccines?",
    description:
      "While we do not support vaccination of any kind, Unjected is specifically tailored for Covid-19 unvaccinated or any mRNA based injection.",
  },
  {
    id: 5,
    title: "Can I browse Unjected without signing up?",
    description:
      "You can browse with limited access. For the full Unjected experience, we ask that you please support our mission.",
  },
];

const FAQs = () => {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const { screenSize } = useGlobalData();

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto flex justify-center items-center py-8">
        <div className="p-2 w-full">
          <h2 className="font-bold text-[32px] md:text-3xl lg:text-5xl xl:text-[52px] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 dark:text-white">
            {screenSize < 640 ? "FAQ" : "Frequently Asked Questions"}
          </h2>

          <div className="flex justify-center items-center md:px-20 lg:px-36 xl:px-80 lg:py-4">
            <div className="flex flex-col gap-5 bg-gradient-to-r from-[#F7A29326] to-[#F1630826] max-w-5xl w-full rounded-3xl p-4 lg:p-8">
              {faqs.map((faq, idx) => (
                <FaqItem
                  key={faq.id}
                  idx={idx}
                  faq={faq}
                  toggleFAQ={toggleFAQ}
                  faqLength={faqs.length}
                  openIndexes={openIndexes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
