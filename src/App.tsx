import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTopTop";
import LoadingSpinner from "./components/LoadingSpinner";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "InfinitiSpa | Luxury Spa & Wellness Lounge",
    description:
      "Experience premium spa treatments and wellness rituals designed to relax, recharge, and restore balance.",
  },
  "/services": {
    title: "Our Services | InfinitiSpa",
    description:
      "Explore massage therapy, facials, body scrubs, wraps, nail care, and waxing at InfinitiSpa in Abuja.",
  },
  "/about": {
    title: "About InfinitiSpa | Our Story",
    description:
      "Meet the founder and learn about InfinitiSpa’s philosophy of whole-body wellness, care, and self-renewal.",
  },
  "/contact": {
    title: "Contact InfinitiSpa | Book Your Appointment",
    description:
      "Contact InfinitiSpa to book a spa appointment, ask a question, or plan your next wellness experience.",
  },
  "/book": {
    title: "Book Now | InfinitiSpa",
    description:
      "Choose your preferred spa treatments and book a relaxing wellness session with InfinitiSpa.",
  },
};

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta["/"];
    document.title = meta.title;
    const descriptionTag = document.querySelector('meta[name="description"]');

    if (descriptionTag) {
      descriptionTag.setAttribute("content", meta.description);
    }

    const showLoader = window.setTimeout(() => {
      setIsLoading(true);
    }, 0);

    const hideLoader = window.setTimeout(() => {
      setIsLoading(false);
    }, 350);

    return () => {
      window.clearTimeout(showLoader);
      window.clearTimeout(hideLoader);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {isLoading && <LoadingSpinner />}

      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
