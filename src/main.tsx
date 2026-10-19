import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";


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
        path: "/service",
        element: <Services />
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
