import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp, SiTiktok } from '@icons-pack/react-simple-icons';


function Footer() {
  return (
    <footer className="min-h-100 bg-[#E8E0D5] flex flex-col md:flex-row p-6 md:p-20 lg:p-25 gap-10 md:gap-16 lg:gap-32">
      <div className="flex flex-col max-w-sm gap-2">
        <Link to="/" className="cursor-pointer inline-block">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1209]">
            InfinitiSpa.
          </h1>
        </Link>
        <p className="text-lg font-medium text-[#7B4F2E]">
          Aesthetician Professional
        </p>
        <hr className="w-48 border-gray-400" />
        <p className="pt-2 text-base text-gray-700 leading-relaxed">
          A peaceful retreat for everyday wellness. Nurturing your body through
          gentle, professional massage care.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#1A1209] uppercase tracking-wider">
          Navigation
        </h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              to="/services"
              className="text-lg hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className="text-lg hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
            >
              Book a session
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg hover:underline text-gray-800 hover:text-[#7B4F2E] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-[#1A1209] uppercase tracking-wider">
          Contact
        </h3>
        <Link
          to="tel:+1234567890"
          className="text-lg hover:underline text-gray-800"
        >
          <Phone size={24} className="inline mr-2" />
          +1 (234) 567-890
        </Link>

        <Link
          to="mailto:info@infinitispa.com"
          className="text-lg hover:underline text-gray-800 flex items-center gap-2"
        >
          <Mail size={24} />
          <span>info@infinitispa.com</span>
        </Link>

        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:underline text-gray-800 flex items-start gap-2"
        >
          
          <MapPin size={24} className="mt-1 shrink-0" />
          <span>123 Serenity Way, Suite A</span>
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-[#1A1209] uppercase tracking-wider">
          Hours of Operation
        </h3>

        <div className="flex flex-col gap-2 text-lg text-gray-800">
          <p className="flex items-center gap-2">
            <Clock size={20} className="text-[#7B4F2E] shrink-0" />
            <span>Mon - Fri: 9AM - 6PM</span>
          </p>

          <p className="flex items-center gap-2">
            <Clock size={20} className="text-[#7B4F2E] shrink-0" />
            <span>Sat: 10AM - 4PM</span>
          </p>

          <p className="pl-7 text-gray-500">Sun: Closed</p>

          <div className="pt-2 pl-7 flex items-center gap-4">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-[#39cf33] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <SiWhatsapp size={24} />
            </a>

            
            <a
              href="https://tiktok.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#1d1b19] transition-colors"
              aria-label="Follow us on TikTok"
            >
              <SiTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr />
    </footer>
  );
}

export default Footer;
