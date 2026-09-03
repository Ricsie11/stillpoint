import { useState } from "react";
import { TextAlignEnd, XLineTop } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="flex justify-between h-20 py-6 items-center px-12 border-b border-b-gray-200">
        <div className="pl-5">
          <h1 className="text-[#1A1209] font-bold text-3xl">InfinitiSpa.</h1>
          <h2 className="text-[#7B4F2E]">Aesthetician Professional</h2>
        </div>
        <ul className="hidden md:flex gap-8 text-xl pr-10 font-medium items-center">
          <li>Services</li> <li>About</li> <li>Contact</li>
          <li className="text-white bg-[#7B4F2E] rounded py-2 px-4 hover:bg-[#A47148] transition-colors duration-300 cursor-pointer">
            BOOK NOW
          </li>
        </ul>

        <div
          onClick={handleMenu}
          className="flex md:hidden cursor-pointer z-50"
        >
          {!isMenuOpen ? <TextAlignEnd size={25} /> : <XLineTop size={25} />}
        </div>

        {isMenuOpen && (
          <div
            onClick={handleMenu}
            className="fixed inset-0 bg-black/30 z-30"
          />
        )}
        <div
          className={`fixed left-0 top-0 w-[60%] border-r border-r-gray-200 h-full bg-[#B9C8B2] z-50 
  transform transition-transform duration-500 ease-in-out 
  ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="m-4">
            <h1 className="text-[#1A1209] font-bold text-3xl">InfinitiSpa.</h1>
            <h2 className="text-[#7B4F2E]">Aesthetician Professional</h2>
          </div>
          <ul className="p-4 uppercase font-bold">
            <li className="p-4 border-b border-b-gray-400">Services</li>
            <li className="p-4 border-b border-b-gray-400">About</li>
            <li className="p-4 border-b border-b-gray-400">Contact</li>
            <li className="p-4 text-white bg-[#7B4F2E] rounded hover:bg-[#A47148] ease-in-out duration-300">
              BOOK NOW
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
