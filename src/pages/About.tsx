import React from "react";
import hope from "../assets/hope.jpg";
import { MediaImage } from "../components/MediaLoader";

function About() {
  return (
    <div className="w-full bg-white py-12 md:py-20">
      {/* This div container handles the layout for the image and text of founder. */}
      <div className="container mx-auto px-6 max-w-8xl">
        {/* This div container handles the box directional layout for the image and introductory text of founder. */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          <main className="w-full md:w-1/2 flex items-center justify-center">
            <MediaImage
              src={hope}
              alt="Image of spa owner Hope Godwin"
              wrapperClassName="w-full max-w-sm md:max-w-md"
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-xl shadow-gray-200/50"
            />
          </main>

          <aside className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold tracking-[3px] text-[#7B4F2E] uppercase">
                Meet The Founder
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1209] leading-tight">
                Hope Godwin Happiness
              </h1>
              <p className="text-[#7B4F2E] font-medium text-base md:text-lg italic">
                Aesthetician & Massage Therapist
              </p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed pt-2">
              With over 10 years of experience in the beauty and wellness
              industry, I founded InfinitiSpa on the belief that true wellness
              comes from treating the whole body, not just the symptoms. My
              approach combines evidence-based techniques with a deep
              understanding of how physical, emotional, and lifestyle factors
              influence overall well-being.
            </p>

            <p className="text-base text-gray-600 leading-relaxed pt-2">
              Every client who walks through our doors receives personalized
              care tailored to their unique needs and goals. Whether you are
              seeking long-overdue stress relief or looking to optimize your
              overall health, I am deeply passionate about helping you achieve
              your ultimate wellness goals.
            </p>
          </aside>
        </div>
      </div>

      <div className="w-full px-6 py-12 md:py-20 bg-[#FBF9F6] mt-10">
        <div className="container mx-auto max-w-7xl">
          {/* THE CARD: Rounded edges, soft background blending, subtle border depth, and premium shadow */}
          <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 md:p-16 lg:p-20 shadow-xl shadow-[#7B4F2E]/30 flex flex-col items-start text-left gap-6 relative overflow-hidden">
            {/* Subtle elegant background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8E0D5]/20 rounded-full blur-3xl -mr-16 -mt-16" />

            {/* Card Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-[#1A1209] tracking-wide leading-tight">
              Our Healing Philosophy
            </h2>

            {/* Decorative Divider Line */}
            <div className="w-20 h-0.5 bg-[#7B4F2E]/40 my-1" />

            {/* Card Body Content */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
              We believe true relaxation happens when the mind and body are in
              harmony. Our treatments go beyond simple pampering to release deep
              muscle tension, calm your nervous system, and restore your inner
              peace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
