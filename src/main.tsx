import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Book from "./pages/Book-now.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/book",
        element: <Book />
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
,
);
