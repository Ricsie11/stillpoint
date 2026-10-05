import ProductCard from "./product-card";

function Featured() {
  return (
    <div className="pt-7 sm:pt-10 min-h-screen bg-[#E8E0D5] p-5 sm:px-20">
      {/* Featured Texts and Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h1 className="text-2xl sm:text-5xl font-[Inter] uppercase font-bold tracking-[-1.5px] sm:tracking-[-2.5px] sm:leading-[1.2]">
            Featured treatments
          </h1>
          <p className="text-[#6B5D4F] font-[Inter] tracking-[-1.2px] text-[16px] sm:text-[22px] pt-2 sm:pt-3 max-w-xl">
            Discover our most popular services designed to help you achieve
            optimal wellness
          </p>
        </div>
        <div className="pt-5 sm:pt-10">
          <button className="bg-[#7B4F2E] cursor-pointer text-white font-bold text-sm sm:text-base py-2 px-6 rounded-md hover:bg-[#974e1a]">
            View All Services
          </button>
        </div>
      </div>

      {/* Featured products grid */}
      <div className="mt-10">
        <ProductCard limit={3} />
      </div>
    </div>
  );
}

export default Featured;
