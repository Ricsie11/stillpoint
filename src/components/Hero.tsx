import React from "react";
import hero from "../assets/images/Hero.png";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      {/* BackgroundImage */}
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-start pt-28 sm:justify-center px-6 sm:px-10 md:px-20">

        {/* Hero Texts */}
        <div className="max-w-75 sm:max-w-2xl">
          <p className="text-[13px] sm:text-[15px] pb-5 sm:pb-6 text-[#E8E0D5] font-bold tracking-[3px] sm:tracking-[5px]">
            A CALMER WAY TO HEAL
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-[-0.5px] font-black text-white">
            Realign your body, restore your balance
          </h1>
          <p className="text-[#E8E0D5] text-base sm:text-lg lg:text-xl leading-relaxed pt-4 sm:pt-5">
            Experience holistic healing through personalized chiropractic care
            that addresses the root causes of discomfort.
          </p>
        </div>

        {/* Booking & Explore Button */}
        <div className="flex flex-col sm:flex-row gap-4 mt-15">
          <button className="bg-[#7B4F2E] hover:bg-[#A47148] text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors duration-300">
            Book a session
            <ArrowRight size={20} />
          </button>

          <button className="border bg-transparent py-3 px-6 text-white hover:bg-white hover:text-[#7B4F2E] transition-colors duration-300 rounded font-semibold">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;