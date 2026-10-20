import React, { useMemo, useState } from "react";
import { featuredTreatments } from "../data/featured";
import { MediaImage } from "../components/MediaLoader";

function Book() {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const selectedList = useMemo(
    () =>
      featuredTreatments.filter((service) => selectedServices.includes(service.id)),
    [selectedServices]
  );

  const totalPrice = useMemo(
    () =>
      selectedList.reduce((sum, service) => {
        const numericPrice = Number(service.price.replace(/[^\d.]/g, ""));
        return sum + numericPrice;
      }, 0),
    [selectedList]
  );

  const toggleService = (serviceId: number) => {
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId]
    );
  };

  return (
    <div className="w-full bg-[#F7F3EE] px-0 py-12 md:px-0 lg:px-0">
      <div className="w-full">
        <div className="px-4 text-center md:px-8">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#7B4F2E]">
            Book Your Session
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#1A1209] md:text-5xl lg:text-6xl">
            Choose your treatment
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#7B4F2E] md:text-lg lg:text-xl">
            Select the services that fit your wellness goals, then confirm your
            booking to get a personalized appointment time.
          </p>
        </div>

        <div className="mt-10 grid w-full gap-8 lg:grid-cols-[1.4fr_0.75fr] lg:items-start">
          <div className="grid gap-5 px-4 sm:grid-cols-2 md:px-8 xl:grid-cols-3">
            {featuredTreatments.map((service) => {
              const isSelected = selectedServices.includes(service.id);

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={[
                    "group overflow-hidden rounded-[24px] border text-left transition-all duration-200",
                    isSelected
                      ? "border-[#7B4F2E] bg-[#FBF5F0] shadow-[0_18px_45px_rgba(123,79,46,0.12)] ring-2 ring-[#E9D7C3]"
                      : "border-[#E8E0D5] bg-white hover:border-[#7B4F2E] hover:shadow-[0_12px_30px_rgba(123,79,46,0.08)]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <MediaImage
                      src={service.image}
                      alt={service.title}
                      wrapperClassName="h-44"
                      className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold text-[#1A1209] lg:text-xl">
                        {service.title}
                      </h2>
                      <span className="rounded-full bg-[#F4EDE5] px-2 py-1 text-[11px] font-semibold uppercase tracking-[1px] text-[#7B4F2E]">
                        {service.time}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600 lg:text-base">
                      {service.description.slice(0, 90)}...
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 lg:text-base">
                        Starting at
                      </span>
                      <span className="text-lg font-bold text-[#7B4F2E] lg:text-xl">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="h-fit rounded-[28px] bg-white p-5 shadow-[0_25px_60px_rgba(123,79,46,0.12)] ring-1 ring-[#E8E0D5] md:p-6 lg:sticky lg:top-24 lg:mr-0">
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#7B4F2E]">
              Selected Services
            </p>

            {selectedList.length === 0 ? (
              <div className="mt-5 rounded-[22px] border border-dashed border-[#E2D7CC] bg-[#F8F5F1] p-4 text-sm text-gray-500 lg:text-base">
                No services selected yet. Choose one or more treatments to begin.
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {selectedList.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-[18px] bg-[#F8F5F1] p-4 ring-1 ring-[#E7DDD2]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-[#1A1209] lg:text-lg">
                        {service.title}
                      </h3>
                      <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[1px] text-[#7B4F2E] ring-1 ring-[#E7DDD2]">
                        {service.time}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-gray-500 lg:text-base">Price</span>
                      <span className="text-base font-bold text-[#7B4F2E] lg:text-lg">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between border-t border-[#E8E0D5] pt-4">
                  <span className="text-sm font-medium text-gray-500 lg:text-base">Total</span>
                  <span className="text-2xl font-bold text-[#7B4F2E] lg:text-3xl">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-[#7B4F2E] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#684128] disabled:cursor-not-allowed disabled:bg-[#C9B29F]"
              disabled={selectedList.length === 0}
            >
              Confirm Booking
            </button>

            <p className="mt-3 text-center text-sm text-[#7B4F2E] lg:text-base">
              We&apos;ll contact you to confirm your appointment time
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Book;
