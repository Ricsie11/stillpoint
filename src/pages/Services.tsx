import React from "react";
import ProductCard from "../components/product-card";
import { Link } from "react-router";

function Services() {
  return (
    <div className="bg-[#E8E0D5]">
      <div className="container mx-auto flex flex-col gap-12 px-6 py-12 md:py-20 lg:px-12 xl:px-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1A1209] md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg lg:text-xl">
            Melt away physical tension and restore your inner calm. Explore our
            selection of curated, deeply restorative massage therapies designed
            for your complete relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard limit={6} className="w-full" />
        </div>

        <hr className="border-gray-300 mt-10" />

        <div>
          <h2 className="text-2xl font-bold text-[#1A1209] md:text-4xl lg:text-5xl">
            Not sure which service is good for you?
          </h2>
          <p className="pt-5 text-lg leading-relaxed text-[#7B4F2E] md:w-3/4 lg:text-xl lg:leading-relaxed">
            Every body is unique. Start with a dedicated Wellness Consultation
            to discuss your goals and receive a custom-tailored therapy
            recommendation to melt away stress.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-md bg-[#7B4F2E] px-6 py-2 text-white transition-colors hover:bg-[#5D3A20] lg:px-8 lg:py-3 lg:text-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
