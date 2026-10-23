import { useState } from "react";
import { TextAlignEnd, XLineTop } from "lucide-react";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavStyle = ({ isActive }: { isActive: boolean }) =>
    `pb-1 transition-all duration-200 border-b-2 ${
      isActive
        ? "text-[#7B4F2E] border-[#7B4F2E] font-semibold"
        : "text-gray-600 border-transparent hover:text-[#7B4F2E]"
    }`;

  const getMobileNavStyle = ({ isActive }: { isActive: boolean }) =>
    `block w-full py-2 transition-all duration-200 ${
      isActive
        ? "text-[#7B4F2E] font-extrabold"
        : "text-white hover:text-[#7B4F2E]"
    }`;

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex justify-between h-20 py-6 items-center px-6 sm:px-10 md:px-20 border-b border-gray-200">
        {/* Logo Block */}
        <Link to="/" className="pl-2 sm:pl-0">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="text-[#1A1209] cursor-pointer font-bold text-2xl md:text-3xl"
          >
            InfinitiSpa.
          </motion.h1>
          <h2 className="text-[#7B4F2E] text-sm md:text-base">
            Massage & Wellness Sanctuary
          </h2>
        </Link>

        {/* Desktop Menu View */}

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="hidden md:flex gap-8 text-xl pr-10 font-medium items-center h-full"
        >
          <li className="h-full flex items-center">
            <NavLink to="/services" className={getNavStyle}>
              Services
            </NavLink>
          </li>
          <li className="h-full flex items-center">
            <NavLink to="/about" className={getNavStyle}>
              About
            </NavLink>
          </li>
          <li className="h-full flex items-center">
            <NavLink to="/contact" className={getNavStyle}>
              Contact
            </NavLink>
          </li>
          {/* Button Style Navigation Option */}
          <li>
            <Link
              to="/book"
              className="text-white bg-[#7B4F2E] rounded py-2 px-4 hover:bg-[#A47148] transition-colors duration-300 block text-base font-bold"
            >
              BOOK NOW
            </Link>
          </li>
        </motion.ul>

        {/* Mobile Menu Button */}
        <div
          onClick={handleMenu}
          className="flex md:hidden cursor-pointer z-50"
        >
          {!isMenuOpen ? <TextAlignEnd size={25} /> : <XLineTop size={25} />}
        </div>

        {/* Backdrop Mask Overlay */}
        {isMenuOpen && (
          <div
            onClick={handleMenu}
            className="fixed inset-0 bg-black/80 z-30 md:hidden"
          />
        )}

        {/* Mobile Drawer Overlay Container */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }} // Starts completely hidden off-screen left
          animate={{
            x: isMenuOpen ? "0%" : "-100%", // Controls the drawer slide state
            opacity: isMenuOpen ? 1 : 0, // Fades into view cleanly
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth physics-based slide
          className="fixed left-0 top-0 w-[80%] sm:w-[50%] lg:w-[30%] border border-gray-800 h-full bg-[#1A1209] z-50"
        >
          <div className="m-4">
            <Link to="/" onClick={closeMenu} className="cursor-pointer">
              <h1 className="text-white font-bold text-3xl">InfinitiSpa.</h1>
            </Link>
            <h2 className="text-[#7B4F2E]">Massage & Wellness Sanctuary</h2>
          </div>

          <ul className="p-4 uppercase font-bold text-white flex flex-col gap-2">
            <li className="border-b border-gray-700">
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={getMobileNavStyle}
              >
                Services
              </NavLink>
            </li>
            <li className="border-b border-gray-700">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={getMobileNavStyle}
              >
                About
              </NavLink>
            </li>
            <li className="border-b border-gray-700">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={getMobileNavStyle}
              >
                Contact
              </NavLink>
            </li>
            <li className="mt-4">
              <Link
                to="/book"
                onClick={closeMenu}
                className="p-3 text-center text-white bg-[#7B4F2E] rounded hover:bg-[#A47148] block transition-all duration-300"
              >
                BOOK NOW
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
