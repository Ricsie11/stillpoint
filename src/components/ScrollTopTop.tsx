import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  // useLocation watches for any changes to the current URL bar
  const { pathname } = useLocation();

  useEffect(() => {
    // This code forces the window to scroll to the absolute top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
