import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import calltoaction from "../assets/images/CallToAction.jpg";

function CallToAction() {
  return (
    <div className="min-h-112.5 relative">
      <div
        style={{ backgroundImage: `url(${calltoaction})` }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      {/* Dark Overlay */}
      <div className="absolute bg-black/60 inset-0" />

      <div className="relative z-10 items-center justify-start p-10 sm:p-20 lg:p-28">
        <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Ready to Feel Your Best?
        </h2>
        <p className="text-[#E8E0D5] text-lg sm:text-xl lg:text-2xl mt-4 max-w-2xl leading-relaxed">
          Your journey to a healthier, more comfortable life starts here.
        </p>

        <Link
          to="/book"
          className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-md border border-white bg-white/5 px-8 py-3 text-white transition-colors duration-300 hover:bg-white/10"
        >
          <span className="absolute inset-0 -z-10 block w-[140%] -translate-x-full skew-x-12 bg-[#E8E0D5] transition-transform duration-500 ease-out group-hover:translate-x-[-15%]" />

          <span className="text-lg font-medium transition-colors duration-300 group-hover:text-black">
            Book a Session
          </span>

          <ArrowRight
            size={20}
            className="transition-all duration-300 group-hover:translate-x-2.5 group-hover:text-black"
          />
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
