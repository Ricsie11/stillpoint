import { useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import { featuredTreatments } from "../data/featured";
import { MediaImage } from "../components/MediaLoader";

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

type Step = "select" | "details" | "success";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  notes: "",
};

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const inputClass =
  "w-full rounded-xl border border-[#E8E0D5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#E9D7C3]";

const primaryButtonClass =
  "w-full rounded-xl bg-[#7B4F2E] cursor-pointer px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#684128] disabled:cursor-not-allowed disabled:bg-[#C9B29F]";

function Book() {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [step, setStep] = useState<Step>("select");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const selectedList = useMemo(
    () =>
      featuredTreatments.filter((service) =>
        selectedServices.includes(service.id),
      ),
    [selectedServices],
  );

  const totalPrice = useMemo(
    () =>
      selectedList.reduce((sum, service) => {
        const numericPrice = Number(service.price.replace(/[^\d.]/g, ""));
        return sum + numericPrice;
      }, 0),
    [selectedList],
  );

  // Prevent picking past dates
  const today = useMemo(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split("T")[0];
  }, []);

  const toggleService = (serviceId: number) => {
    // Locks the selection while the booking is being sent or after it is sent
    if (step === "success" || submitting) return;
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );
  };

  const updateField = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedList.length === 0) {
      setError("Please select at least one treatment.");
      return;
    }

    setError("");
    setSubmitting(true);

    const servicesText = selectedList
      .map((s) => `- ${s.title} (${s.time}) - ${s.price}`)
      .join("\n");
    const totalText = `₦${totalPrice.toLocaleString()}`;

    const params = {
      // Used by the client acknowledgment template
      client_name: form.name,
      client_email: form.email,
      client_phone: form.phone,
      date: form.date,
      time: form.time,
      notes: form.notes || "None",
      services: servicesText,
      total: totalText,

      // Used by the shared web owner template
      subject: `New booking request from ${form.name}`,
      details: [
        "New booking request",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        "",
        `Preferred date: ${form.date}`,
        `Preferred time: ${form.time}`,
        "",
        "Services:",
        servicesText,
        "",
        `Total: ${totalText}`,
        `Notes: ${form.notes || "None"}`,
        "",
        "Reply to this email to confirm or suggest another date.",
      ].join("\n"),
    };

    try {
      // 1. Web Owner notification
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // 2. Client acknowledgment
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID,
          params,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
      } catch {
        console.warn("Client acknowledgment email failed");
      }

      setConfirmedEmail(form.email);
      setStep("success");
      setSelectedServices([]);
      setForm(emptyForm);
    } catch {
      setError(
        "We couldn't send your booking request. Check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const startOver = () => {
    setStep("select");
    setError("");
  };

  return (
    <div className="w-full bg-[#F7F3EE] px-0 py-12 md:px-0 lg:px-0 overflow-hidden">
      <div className="w-full">
        {/* Header Section */}
        <motion.div
          className="px-4 text-center md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
        >
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#7B4F2E]">
            Book Your Session
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#1A1209] md:text-5xl lg:text-6xl">
            Choose your treatment
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#7B4F2E] md:text-lg lg:text-xl">
            Select the services that fit your wellness goals, then pick a
            preferred date and confirm your booking request.
          </p>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="mt-10 grid w-full gap-8 lg:grid-cols-[1.4fr_0.75fr] lg:items-start">
          {/* Services Grid Layout */}
          <motion.div
            className="grid gap-5 px-4 sm:grid-cols-2 md:px-8 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {featuredTreatments.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  variants={fadeInScale}
                  onClick={() => toggleService(service.id)}
                  aria-pressed={isSelected}
                  className={[
                    "group overflow-hidden rounded-3xl border text-left transition-all duration-200 w-full",
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
                </motion.button>
              );
            })}
          </motion.div>

          {/* Sticky Sidebar */}
          <motion.aside
            className="h-fit rounded-[28px] bg-white p-5 shadow-[0_25px_60px_rgba(123,79,46,0.12)] ring-1 ring-[#E8E0D5] md:p-6 lg:sticky lg:top-24 lg:mr-4 mx-4 lg:mx-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {step === "success" ? (
              <div className="rounded-[22px] bg-[#F8F5F1] p-5 text-center">
                <p className="text-lg font-bold text-[#1A1209]">
                  Booking request sent 🎉
                </p>
                <p className="mt-2 text-sm text-[#7B4F2E] lg:text-base">
                  We&apos;ll email you at{" "}
                  <span className="font-semibold">{confirmedEmail}</span> to
                  confirm your appointment time.
                </p>
                <button
                  type="button"
                  onClick={startOver}
                  className="mt-4 cursor-pointer text-sm font-semibold text-[#7B4F2E] underline"
                >
                  Book another session
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm font-bold uppercase tracking-[4px] text-[#7B4F2E]">
                  Selected Services
                </p>

                {selectedList.length === 0 ? (
                  <div className="mt-5 rounded-[22px] border border-dashed border-[#E2D7CC] bg-[#F8F5F1] p-4 text-sm text-gray-500 lg:text-base">
                    Choose one or more treatments to begin.
                  </div>
                ) : (
                  <div className="mt-5 space-y-3">
                    <AnimatePresence initial={false}>
                      {selectedList.map((service) => (
                        <motion.div
                          layout
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
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
                            <span className="text-sm text-gray-500 lg:text-base">
                              Price
                            </span>
                            <span className="text-base font-bold text-[#7B4F2E] lg:text-lg">
                              {service.price}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    <div className="flex items-center justify-between border-t border-[#E8E0D5] pt-4">
                      <span className="text-sm font-medium text-gray-500 lg:text-base">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-[#7B4F2E] lg:text-3xl">
                        ₦{totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Step 1: continue to details */}
                {step === "select" && (
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    disabled={selectedList.length === 0}
                    className={`mt-6 ${primaryButtonClass}`}
                  >
                    Continue
                  </button>
                )}

                {/* Step 2: client details + date, then confirm */}
                {step === "details" && (
                  <form onSubmit={handleConfirm} className="mt-6 space-y-3">
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={updateField}
                      className={inputClass}
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={updateField}
                      className={inputClass}
                    />
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={updateField}
                      className={inputClass}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        required
                        type="date"
                        name="date"
                        min={today}
                        aria-label="Preferred date"
                        value={form.date}
                        onChange={updateField}
                        className={inputClass}
                      />
                      <select
                        required
                        name="time"
                        aria-label="Preferred time"
                        value={form.time}
                        onChange={updateField}
                        className={inputClass}
                      >
                        <option value="">Time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="Notes (optional)"
                      value={form.notes}
                      onChange={updateField}
                      className={inputClass}
                    />

                    {error && (
                      <p role="alert" className="text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting || selectedList.length === 0}
                      className={primaryButtonClass}
                    >
                      {submitting ? "Sending..." : "Confirm Booking"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep("select")}
                      disabled={submitting}
                      className="w-full cursor-pointer text-sm font-semibold text-[#7B4F2E] disabled:opacity-50"
                    >
                      ← Back to treatments
                    </button>
                  </form>
                )}

                <p className="mt-3 text-center text-sm text-[#7B4F2E] lg:text-base">
                  We&apos;ll contact you to confirm your appointment.
                </p>
              </>
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

export default Book;
