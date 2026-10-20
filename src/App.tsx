import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTopTop";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
