import React from "react";
import hope from "../assets/hope.jpg";
import { MediaImage } from "../components/MediaLoader";
import { motion } from "framer-motion";

function About() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-white py-12 md:py-20 overflow-hidden">
      {/* Founder Section Container */}
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Portrait Image Column */}
          <motion.main
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <MediaImage
              src={hope}
              alt="Image of spa owner Hope Godwin"
              wrapperClassName="w-full max-w-sm md:max-w-md"
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-xl shadow-gray-200/50"
            />
          </motion.main>

          {/* Text Content Column */}
          <motion.aside
            variants={textContainerVariants}
            initial="hidden"
            animate="show"
            className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left"
          >
            {/* Title Group */}
            <motion.div
              variants={textItemVariants}
              className="flex flex-col gap-1"
            >
              <span className="text-sm font-bold tracking-[3px] text-[#7B4F2E] uppercase">
                Meet The Founder
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1209] leading-tight">
                Hope Godwin Happiness
              </h1>
              <p className="text-[#7B4F2E] font-medium text-base md:text-lg italic">
                Aesthetician & Massage Therapist
              </p>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.p
              variants={textItemVariants}
              className="text-base text-gray-600 leading-relaxed pt-2"
            >
              With over 10 years of experience in the beauty and wellness
              industry, I founded InfinitiSpa on the belief that true wellness
              comes from treating the whole body, not just the symptoms. My
              approach combines evidence-based techniques with a deep
              understanding of how physical, emotional, and lifestyle factors
              influence overall well-being.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={textItemVariants}
              className="text-base text-gray-600 leading-relaxed pt-2"
            >
              Every client who walks through our doors receives personalized
              care tailored to their unique needs and goals. Whether you are
              seeking long-overdue stress relief or looking to optimize your
              overall health, I am deeply passionate about helping you achieve
              your ultimate wellness goals.
            </motion.p>
          </motion.aside>
        </div>
      </div>

      {/* Philosophy Card Section */}
      <div className="w-full px-6 py-12 md:py-20 bg-[#FBF9F6] mt-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white border border-[#E8E0D5] rounded-3xl p-8 md:p-16 lg:p-20 shadow-xl shadow-[#7B4F2E]/30 flex flex-col items-start text-left gap-6 relative overflow-hidden"
          >
            {/* Subtle elegant background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8E0D5]/20 rounded-full blur-3xl -mr-16 -mt-16" />

            {/* Card Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-[#1A1209] tracking-wide leading-tight">
              Our Healing Philosophy
            </h2>

            {/* Decorative Divider Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-0.5 bg-[#7B4F2E]/40 my-1 origin-left"
            />

            {/* Card Body Content */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
              We believe true relaxation happens when the mind and body are in
              harmony. Our treatments go beyond simple pampering to release deep
              muscle tension, calm your nervous system, and restore your inner
              peace.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
