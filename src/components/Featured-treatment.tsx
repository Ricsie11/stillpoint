import { Link } from "react-router";
import ProductCard from "./product-card";
import { motion, type Variants } from "framer-motion";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function Featured() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen bg-[#E8E0D5] p-5 pt-7 sm:px-20 sm:pt-10 lg:px-28 xl:px-32 overflow-hidden"
    >
      {/* Featured Texts and Button */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          {/* Animated Header */}
          <motion.h1 
            variants={textVariants}
            className="font-[Inter] text-2xl font-bold uppercase tracking-[-1.5px] sm:text-5xl sm:leading-[1.2] sm:tracking-[-2.5px] lg:text-4xl"
          >
            Featured treatments
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p 
            variants={textVariants}
            className="max-w-xl pt-2 text-[16px] tracking-[-1.2px] text-[#6B5D4F] sm:pt-3 sm:text-[22px] lg:text-[26px] lg:leading-relaxed"
          >
            Discover our most popular services designed to help you achieve
            optimal wellness
          </motion.p>
        </div>

        
        <motion.div 
          variants={buttonVariants}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(173, 115, 27)"
          }}
          className="mt-5 sm:mt-10 items-center max-sm:w-42 "
        >
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#7B4F2E] px-6 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#974e1a] sm:text-base lg:px-8 lg:py-3"
          >
            View All Services
          </Link>
        </motion.div>
      </div>

      
      <motion.div 
        variants={gridVariants}
        className="mt-10 flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-8"
      >
        <ProductCard limit={3} className="w-full md:w-[32%]" />
      </motion.div>
    </motion.div>
  );
}

export default Featured;
