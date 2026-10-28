import React from "react";
import ProductCard from "../components/product-card";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Services() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#E8E0D5]">
      <div className="container mx-auto flex flex-col gap-12 px-6 py-12 md:py-20 lg:px-12 xl:px-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-[#1A1209] md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg lg:text-xl">
            Melt away physical tension and restore your inner calm. Explore our
            selection of curated, deeply restorative massage therapies designed
            for your complete relaxation.
          </p>
        </motion.div>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={cardVariants}
            className="w-full col-span-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <ProductCard limit={6} className="w-full" />
          </motion.div>
        </motion.div>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="border-gray-300 mt-10 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-[#1A1209] md:text-4xl lg:text-5xl">
            Not sure which service is good for you?
          </h2>
          <p className="pt-5 text-lg leading-relaxed text-[#7B4F2E] md:w-3/4 lg:text-xl lg:leading-relaxed">
            Every body is unique. Start with a dedicated Wellness Consultation
            to discuss your goals and receive a custom-tailored therapy
            recommendation to melt away stress.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-5"
          >
            <Link
              to="/contact"
              className="inline-block rounded-md bg-[#7B4F2E] px-6 py-2 text-white transition-colors hover:bg-[#5D3A20] lg:px-8 lg:py-3 lg:text-lg font-semibold"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
