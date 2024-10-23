import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Sukanya S Jadhav</span>
            </p>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Frontend Developer</span>
            </p>
            <p className="flex flex-row items-center my-[15px] xs:my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                ssj0114.22@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Created by SSJ 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
