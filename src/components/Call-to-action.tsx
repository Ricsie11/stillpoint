import { ArrowRight } from "lucide-react";
import calltoaction from "../assets/images/CallToAction.jpg";

function CallToAction() {
  return (
    <div className="min-h-112.5 relative">
      <div
        style={{ backgroundImage: `url(${calltoaction})` }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      {/* Dark Overlay */}
      <div className="absolute bg-black/70 inset-0" />

      <div className="relative z-10 items-center justify-start p-15 sm:p-40">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Ready to Feel Your Best?
        </h2>
        <p className="text-[#E8E0D5] text-lg sm:text-xl mt-4">
          Your journey to a healthier, more comfortable life starts here.
        </p>
        <button className="group relative overflow-hidden cursor-pointer border flex gap-2 items-center border-black mt-8 ml-4 px-8 py-3 text-white transition-colors duration-300 rounded isolate">
          {/* The Angled Shutter Layer */}
          <span className="absolute inset-0 -z-10 block w-[140%] -translate-x-full skew-x-12 bg-[#E8E0D5] transition-transform duration-500 ease-out group-hover:translate-x-[-15%]" />

          <span className="text-lg transition-colors duration-300 group-hover:text-black">
            Book a Session
          </span>

          <ArrowRight
            size={20}
            className="transition-all duration-300 group-hover:translate-x-2.5 group-hover:text-black"
          />
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
