import { testimonials } from "../data/testimonials";
import { MediaImage } from "./MediaLoader";
import { motion, type Variants } from "framer-motion";

function Clients() {
 
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };


  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <div className="min-h-[162.5px] py-12 px-4 sm:px-8 bg-[#E8E0D5] border-t-2 border-[#faf6f2] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
       
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2 mb-10"
        >
          
          <h1 className="text-3xl sm:text-5xl uppercase font-bold tracking-tight text-[#1A1209] leading-tight">
            What our clients say
          </h1>
          
          <p className="text-[#6B5D4F] text-base sm:text-xl max-w-xl">
            Real experiences from people who have transformed their health with us
          </p>
        </motion.div>

        {/* Card Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {testimonials.map((testimonial) => (
           
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-[#faf0e1] rounded-2xl border border-gray-300/60 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-500 text-lg"
                          : "text-gray-300 text-lg"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 italic leading-relaxed text-base">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author & Date Footer */}
              <div className="border-t border-gray-300/40 pt-4 mt-4 flex justify-between items-center text-sm">
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold text-gray-900 text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.date}</p>
                </div>
                
                {/* Profile Image Avatar Wrapper */}
                <MediaImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  wrapperClassName="w-12 h-12 rounded-full overflow-hidden border border-gray-300/50 shadow-inner"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Clients;