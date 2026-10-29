import React, { useState } from "react";
import vid from "../assets/videos/vid1.mp4";
import { MediaVideo } from "../components/MediaLoader";
import { motion, type Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-[#E2D7CC] bg-[#FBF9F6] px-4 py-3 text-base text-[#1A1209] outline-none transition focus:border-[#7B4F2E] focus:ring-2 focus:ring-[#D9C2A3]";

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const formVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (sent) setSent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSent(false);
    setSubmitting(true);

    const fullName = `${form.firstName} ${form.lastName}`.trim();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          client_email: form.email,
          subject: `New message from ${fullName}`,
          details: [
            "New contact message",
            "",
            `Name: ${fullName}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            "",
            "Message:",
            form.message,
          ].join("\n"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setForm(emptyForm);
    } catch {
      setError(
        "We couldn't send your message. Check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F5F1] overflow-hidden">
      <div className="grid w-full gap-0 overflow-hidden bg-white shadow-[0_25px_60px_rgba(123,79,46,0.15)] ring-1 ring-[#E8E0D5] md:grid-cols-2">
        {/* Left Side: Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full min-h-105 w-full"
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

        {/* Right Side: Form */}
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

            <motion.form
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              animate="show"
              className="space-y-5"
            >
              {/* Row 1: Names */}
              <motion.div
                variants={inputVariants}
                className="grid gap-5 md:grid-cols-2"
              >
                <label className="block text-sm font-medium text-[#1A1209]">
                  First Name
                  <input
                    required
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={updateField}
                    className={inputClass}
                  />
                </label>

                <label className="block text-sm font-medium text-[#1A1209]">
                  Last Name
                  <input
                    required
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={updateField}
                    className={inputClass}
                  />
                </label>
              </motion.div>

              {/* Row 2: Contact Info */}
              <motion.div
                variants={inputVariants}
                className="grid gap-5 md:grid-cols-2"
              >
                <label className="block text-sm font-medium text-[#1A1209]">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField}
                    className={inputClass}
                  />
                </label>

                <label className="block text-sm font-medium text-[#1A1209]">
                  Tel
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="(123) 456-7890"
                    value={form.phone}
                    onChange={updateField}
                    className={inputClass}
                  />
                </label>
              </motion.div>

              {/* Row 3: Message */}
              <motion.label
                variants={inputVariants}
                className="block text-sm font-medium text-[#1A1209]"
              >
                Message
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell us about your goals or services of interest..."
                  value={form.message}
                  onChange={updateField}
                  className={inputClass}
                />
              </motion.label>

              {/* Status messages */}
              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}
              {sent && (
                <p
                  role="status"
                  className="rounded-xl bg-[#F8F5F1] px-4 py-3 text-sm font-medium text-[#7B4F2E]"
                >
                  Message sent. We&apos;ll get back to you soon.
                </p>
              )}

              {/* Row 4: Submit */}
              <motion.button
                variants={inputVariants}
                whileHover={
                  submitting ? undefined : { scale: 1.01, backgroundColor: "#684128" }
                }
                whileTap={submitting ? undefined : { scale: 0.99 }}
                type="submit"
                disabled={submitting}
                className="w-full cursor-pointer rounded-xl bg-[#7B4F2E] px-6 py-3 text-base font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-[#C9B29F]"
              >
                {submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative my-8 w-full md:my-10"
      >
        <div className="mx-auto h-[100px] w-[80%] overflow-hidden rounded-[28px] bg-[#EAE2D8] shadow-[0_20px_40px_rgba(123,79,46,0.12)] ring-1 ring-[#E8E0D5]">
          <iframe
            title="Location map"
            src="https://www.google.com/maps?q=Asokoro%20Abuja&z=11&output=embed"
            className="h-full w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

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