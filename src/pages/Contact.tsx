import React from "react";
import vid from "../assets/videos/vid1.mp4";
import { MediaVideo } from "../components/MediaLoader";
// 1. IMPORT Framer Motion components
import { motion } from "framer-motion";

function Contact() {
  // 2. DEFINE Sequential Stagger Animation Presets for Form Inputs
  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Quickly renders each input line one after the other
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F5F1] overflow-hidden">
      
      {/* Splits the main promotional content panel using coordinated entry frames */}
      <div className="grid w-full gap-0 overflow-hidden bg-white shadow-[0_25px_60px_rgba(123,79,46,0.15)] ring-1 ring-[#E8E0D5] md:grid-cols-2">
        
        {/* Left Side: Video Media Element — Slides cleanly in from the left edge */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full min-h-[420px] w-full" // Fixed v4 arbitrary layout value "min-h-105" to standard "min-h-[420px]"
        >
          <MediaVideo
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            wrapperClassName="h-full w-full"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Right Side: Form Layout Column Container — Slides in from the right edge */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex h-full w-full items-center p-6 md:p-10"
        >
          <div className="w-full">
            <p className="mb-2 text-sm font-bold uppercase tracking-[4px] text-[#7B4F2E]">
              Contact Us
            </p>
            <h2 className="mb-6 text-3xl font-bold text-[#1A1209] md:text-4xl">
              Book Your Wellness Visit
            </h2>

            {/* Form Tag: Converted to motion.form to trigger stagger entries on input fields */}
            <motion.form 
              variants={formVariants}
              initial="hidden"
              animate="show"
              className="space-y-5"
            >
              {/* Row 1: Names */}
              <motion.div variants={inputVariants} className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#1A1209]">
                  First Name
                  <input
                    type="text"
                    placeholder="First name"
                    className="mt-2 w-full rounded-xl border border-[#E2D7CC] bg-[#FBF9F6] px-4 py-3 text-base text-[#1A1209] outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#D9C2A3]"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1A1209]">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last name"
                    className="mt-2 w-full rounded-xl border border-[#E2D7CC] bg-[#FBF9F6] px-4 py-3 text-base text-[#1A1209] outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#D9C2A3]"
                  />
                </label>
              </motion.div>

              {/* Row 2: Contact Info */}
              <motion.div variants={inputVariants} className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#1A1209]">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-[#E2D7CC] bg-[#FBF9F6] px-4 py-3 text-base text-[#1A1209] outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#D9C2A3]"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1A1209]">
                  Tel
                  <input
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="mt-2 w-full rounded-xl border border-[#E2D7CC] bg-[#FBF9F6] px-4 py-3 text-base text-[#1A1209] outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#D9C2A3]"
                  />
                </label>
              </motion.div>

              {/* Row 3: Message Textarea */}
              <motion.label variants={inputVariants} className="block text-sm font-medium text-[#1A1209]">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals or services of interest..."
                  className="mt-2 w-full rounded-xl border border-[#E2D7CC] bg-[#FBF9F6] px-4 py-3 text-base text-[#1A1209] outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#D9C2A3]"
                />
              </motion.label>

              {/* Row 4: Interactive Submit Button Element */}
              <motion.button
                variants={inputVariants}
                whileHover={{ scale: 1.01, backgroundColor: "#684128" }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full rounded-xl bg-[#7B4F2E] px-6 py-3 text-base font-semibold text-white transition-colors cursor-pointer"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Map Section Wrapper: Activates smooth zoom expansion on scroll viewport intersections */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative my-8 w-full md:my-10"
      >
        {/* Map Frame Core Wrapper */}
        <div className="mx-auto h-100 w-[80%] overflow-hidden rounded-[28px] bg-[#EAE2D8] shadow-[0_20px_40px_rgba(123,79,46,0.12)] ring-1 ring-[#E8E0D5]">
          <iframe
            title="Location map"
            src="https://www.google.com/maps?q=Asokoro%20Abuja&z=11&output=embed"
            className="h-full w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address Floating Card — Pops into view slightly behind the map shell */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
          className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-sm ring-1 ring-[#E8E0D5] md:left-10 md:bottom-10"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#7B4F2E]">
            Visit Us
          </p>
          <p className="text-lg font-semibold text-[#1A1209]">Asokoro, Abuja</p>
          <p className="mt-2 text-sm text-gray-600">InfinitiSpa</p>
        </motion.div>
      </motion.div>
      
    </div>
  );
}

export default Contact;
