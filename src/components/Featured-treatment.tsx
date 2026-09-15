import React from "react";

function Featured() {
  return (
    <div className="pt-10 sm:pt-20 h-screen bg-[#E8E0D5] flex sm:justify-between">
      <div className="p-5 sm:mx-20">
        <h1 className="text-3xl sm:text-5xl font-[Inter] uppercase font-bold tracking-[-1.5px] sm:tracking-[-2.5px] sm:leading-[1.2] ">
          Featured treatments
        </h1>
        <p className="text-[#6B5D4F] font-[Inter] tracking-[-1.2px] text-[16px] sm:text-[22px] pt-2 sm:pt-3">
          Discover our most popular services designed to help you achieve
          optimal wellness
        </p>
      </div>
      <div className="p-5 sm:mx-20 flex flex-col pt-20 sm:pt-10 ">
        <button className="mt-4 bg-[#7B4F2E] text-[#FFFFFF] font-[Inter] font-bold text-sm sm:text-base py-2 px-4 rounded-md hover:bg-[#974e1a]">
          View All Services
        </button>
      </div>
    </div>
  );
}

export default Featured;
