import React from "react";
import Image from "next/image";
import Logo from "/public/assets/images/app-logo.svg";
import Fb from "/public/assets/images/social-media-icons/fb.svg";
import Insta from "/public/assets/images/social-media-icons/insta.svg";
import Twitter from "/public/assets/images/social-media-icons/twitter.svg";
import Pinerest from "/public/assets/images/social-media-icons/pinerest.svg";

function Footer() {
  return (
    <footer className="w-full bg-[#000000]">
      <div className="max-w-[1440px] mx-auto py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-1 mb-4 md:mb-0 text-[#ffffff] justify-center ">
              <div className="mb-4 justify-center  md:justify-start">
                <Image
                  src={Logo}
                  alt="Company Logo"
                  width={150}
                  height={50}
                  layout="intrinsic"
                />
              </div>
              <p className="text-sm">
                The World's First Unvaccinated Platform. Creating love,
                friendship, and community connections since 2021.
              </p>
            </div>

            <div className="flex-1 mb-4 md:mb-0 text-[#ffffff] md:mx-12">
              <div>
                <h5 className="text-lg font-semibold mb-2">About</h5>
                <div className="flex gap-12">
                  <div className="text-sm">
                    <p className="mb-1">Contact us</p>
                    <p className="mb-1">Guidelines</p>
                  </div>
                  <div className="text-sm">
                    <p className="mb-1">Terms & Conditions </p>
                    <p className="mb-1">Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#ffffff] md:mx-4">
              <p>Connect with us</p>
              <div className="btn-bottom flex gap-3 mt-4  md:justify-start">
                <a href="#">
                  <Image
                    src={Insta}
                    alt="Instagram"
                    className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
                  />
                </a>
                <a href="#" className="inline-block">
                  <Image
                    src={Fb}
                    alt="Facebook"
                    className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
                  />
                </a>
                <a href="#">
                  <Image
                    src={Twitter}
                    alt="Twitter"
                    className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
                  />
                </a>

                <a href="#">
                  <Image
                    src={Pinerest}
                    alt="Pinerest"
                    className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-4 text-center text-[#ffffff80] text-sm border-opacity-29">
            <p>&copy;2024 Unjected | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
