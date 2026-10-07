import { testimonials } from "../data/testimonials";

function Clients() {
  return (
    <div className="min-h-125 py-5 px-2 sm:p-5 bg-[#E8E0D5] border-t-2 border-[#faf6f2]">
      <div className="p-2 sm:p-8">
        <h1 className="text-2xl sm:text-5xl font-[Inter] uppercase font-bold tracking-[-1.5px] sm:tracking-[-2.5px] sm:leading-[1.2]">
          What our clients say
        </h1>
        <p className="text-[#6B5D4F] font-[Inter] tracking-[-1.2px] text-[16px] pb-5 sm:text-[22px] pt-2 sm:pt-2 max-w-xl">
          Real experiences from people who have transformed their health with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full bg-[#faf0e1] rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition-shadow p-5 sm:p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 text-lg"
                          : "text-gray-300 text-lg"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author & Date Footer */}
              <div className="border-t border-gray-300/40 pt-3 mt-4 flex justify-between items-center text-sm">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;