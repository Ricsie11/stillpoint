import { useState, useEffect } from "react";
import hero from "../assets/images/Hero.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Hero() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => {
      setHeroLoaded(true);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#121212] overflow-hidden">
      {/* 1. Spinner Layer */}
      {!heroLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-20">
          <div className="w-12 h-12 border-4 border-white/20 border-t-[#7B4F2E] rounded-full animate-spin"></div>
        </div>
      )}

      {/* 2. Background Image */}
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
          heroLoaded ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* 3. Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 4. Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-start pt-28 sm:justify-center px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32">
        {/* Hero Texts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3 }}
          className="max-w-sm sm:max-w-2xl lg:max-w-3xl"
        >
          <p className="text-[13px] sm:text-[15px] lg:text-sm pb-5 sm:pb-6 text-[#E8E0D5] font-bold tracking-[3px] sm:tracking-[5px] lg:tracking-[4px]">
            A CALMER WAY TO HEAL
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.4rem] leading-tight tracking-[-0.5px] font-black text-white">
            Realign your body, restore your balance
          </h1>

          <p className="text-[#E8E0D5] text-base sm:text-lg lg:text-xl leading-relaxed pt-4 sm:pt-5 max-w-2xl">
            Experience deep physical relaxation through personalized massage
            care designed to melt away tension and soothe everyday stress.
          </p>
        </motion.div>

        {/* Booking & Explore Button Layout Row */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 50}}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          {/* Book Session CTA */}
          <Link
            to="/book"
            className="bg-[#7B4F2E] hover:bg-[#A47148] cursor-pointer text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors duration-300 group text-center lg:px-7 lg:py-3"
          >
            <span className="text-base lg:text-[1rem]">Book a session</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2.5 transition-transform duration-300"
            />
          </Link>

          {/* Explore Services Custom Animated Link */}
          <Link
            to="/services"
            className="group relative overflow-hidden border border-white bg-transparent cursor-pointer py-3 px-6 text-white transition-colors duration-300 rounded font-semibold isolate flex items-center justify-center text-center lg:px-7 lg:py-3"
          >
            <span className="absolute inset-0 -z-10 block scale-x-0 bg-white transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />

            <span className="text-base transition-colors duration-300 group-hover:text-[#7B4F2E] lg:text-[1rem]">
              Explore Services
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
