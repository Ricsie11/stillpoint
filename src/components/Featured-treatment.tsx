import { Link } from "react-router";
import ProductCard from "./product-card";

function Featured() {
  return (
    <div className="min-h-screen bg-[#E8E0D5] p-5 pt-7 sm:px-20 sm:pt-10">
      {/* Featured Texts and Button */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-[Inter] text-2xl font-bold uppercase tracking-[-1.5px] sm:text-5xl sm:leading-[1.2] sm:tracking-[-2.5px]">
            Featured treatments
          </h1>
          <p className="max-w-xl pt-2 text-[16px] tracking-[-1.2px] text-[#6B5D4F] sm:pt-3 sm:text-[22px]">
            Discover our most popular services designed to help you achieve
            optimal wellness
          </p>
        </div>
        <div className="pt-5 sm:pt-10">
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#7B4F2E] px-6 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#974e1a] sm:text-base"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* Featured products grid */}
      <div className="mt-10 flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-8">
        <ProductCard limit={3} className="w-full md:w-[32%]" />
      </div>
    </div>
  );
}

export default Featured;
