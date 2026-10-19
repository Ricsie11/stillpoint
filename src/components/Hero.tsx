import hero from "../assets/images/Hero.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

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
        <div className="max-w-sm sm:max-w-2xl">
          <p className="text-[13px] sm:text-[15px] pb-5 sm:pb-6 text-[#E8E0D5] font-bold tracking-[3px] sm:tracking-[5px]">
            A CALMER WAY TO HEAL
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-[-0.5px] font-black text-white">
            Realign your body, restore your balance
          </h1>

          <p className="text-[#E8E0D5] text-base sm:text-lg lg:text-xl leading-relaxed pt-4 sm:pt-5">
            Experience deep physical relaxation through personalized massage
            care designed to melt away tension and soothe everyday stress.
          </p>
        </div>

        {/* Booking & Explore Button Layout Row */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Book Session CTA */}
          <Link
            to="/book"
            className="bg-[#7B4F2E] hover:bg-[#A47148] cursor-pointer text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors duration-300 group text-center"
          >
            <span>Book a session</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2.5 transition-transform duration-300"
            />
          </Link>

          {/* Explore Services Custom Animated Link */}
          <Link
            to="/services"
            className="group relative overflow-hidden border border-white bg-transparent cursor-pointer py-3 px-6 text-white transition-colors duration-300 rounded font-semibold isolate flex items-center justify-center text-center"
          >
            <span className="absolute inset-0 -z-10 block scale-x-0 bg-white transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />

            <span className="transition-colors duration-300 group-hover:text-[#7B4F2E]">
              Explore Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
