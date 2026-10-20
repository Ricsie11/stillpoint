import React from "react";
import ProductCard from "../components/product-card";
import { Link } from "react-router";

function Services() {
  return (
    <div className="bg-[#E8E0D5]">
      <div className="container mx-auto flex flex-col gap-12 px-6 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1A1209] md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
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
          <h2 className="md:text-4xl font-bold text-2xl">
            Not sure which service is good for you?
          </h2>
          <p className="text-lg leading-relaxed pt-5 md:w-3/4 text-[#7B4F2E]">
            Every body is unique. Start with a dedicated Wellness Consultation
            to discuss your goals and receive a custom-tailored therapy
            recommendation to melt away stress.
          </p>
          <Link
            to="/consultation"
            className="mt-5 inline-block bg-[#7B4F2E] text-white py-2 px-6 rounded-md hover:bg-[#5D3A20] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
