import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp, SiTiktok } from "@icons-pack/react-simple-icons";

function Footer() {
  return (
    <footer className="w-full bg-[#E8E0D5] border border-gray-400 p-6 md:p-20 lg:p-25 flex flex-col gap-12">
      {/* Content Columns Wrapper */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32">
        {/* Brand Description Column */}
        <div className="flex flex-col max-w-sm">
          <Link to="/" className="cursor-pointer inline-block">
            <h1 className="font-bold text-3xl md:text-4xl text-[#1A1209]">
              InfinitiSpa.
            </h1>
          </Link>
          <p className="text-lg font-medium text-[#7B4F2E]">
            Massage & Wellness Sanctuary
          </p>
          <hr className="w-66 border-gray-400 mt-1" />
          <p className="pt-4 text-base text-gray-700 leading-relaxed">
            A peaceful retreat for everyday wellness. Nurturing your body
            through gentle, professional massage care.
          </p>
        </div>

        {/* Navigation Menu Column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-[#1A1209] uppercase tracking-wider">
            Navigation
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/services"
                className="text-base hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="text-base hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
              >
                Book a session
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Links Column */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#1A1209] uppercase tracking-wider">
            Contact
          </h3>
          
          <Link
            to="tel:+1234567890"
            className="text-base hover:underline text-gray-800 flex items-center gap-2"
          >
            <Phone size={20} className="shrink-0 text-[#7B4F2E]" />
            <span>+1 (234) 567-890</span>
          </Link>

          <Link
            to="mailto:info@infinitispa.com"
            className="text-base hover:underline text-gray-800 flex items-center gap-2"
          >
            <Mail size={20} className="shrink-0 text-[#7B4F2E]" />
            <span>info@infinitispa.com</span>
          </Link>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:underline text-gray-800 flex items-start gap-2"
          >
            <MapPin size={20} className="mt-1 shrink-0 text-[#7B4F2E]" />
            <span>AYA Asokoro, Abuja</span>
          </a>
        </div>

        {/* Hours & Social Operations Column */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#1A1209] uppercase tracking-wider">
            Hours of Operation
          </h3>

          <div className="flex flex-col gap-2 text-gray-800">
            <p className="flex items-center gap-2">
              <Clock size={20} className="text-[#7B4F2E] shrink-0" />
              <span className="text-base">Mon - Fri: 9AM - 6PM</span>
            </p>

            <p className="flex items-center gap-2">
              <Clock size={20} className="text-[#7B4F2E] shrink-0" />
              <span className="text-base">Sat: 10AM - 4PM</span>
            </p>

            <p className="pl-7 text-gray-500 text-base">Sun: Closed</p>

            {/* Social Icons Layout Section */}
            <div className="pt-2 pl-7 flex items-center gap-4">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-[#25D366] transition-colors"
                aria-label="Call on WhatsApp"
              >
                <SiWhatsapp size={30} />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Follow us on TikTok"
              >
                <SiTiktok size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line section */}
      <hr className="w-full border-t border-gray-400/50" />

     
      <div className="text-base text-gray-600 gap-2 flex flex-col sm:flex-row items-center justify-center md:justify-between sm:gap-2 -mt-4">
        <span>
          &copy; {new Date().getFullYear()} InfinitiSpa. All rights reserved.
        </span>

        <span className="text-sm sm:text-base">
          Designed & built by{" "}
          <a
            href="https://alfredwisdom.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7B4F2E] font-medium underline"
          >
            KaydenTech
          </a>
          .
        </span>
      </div>
    </footer>
  );
}

export default Footer;
