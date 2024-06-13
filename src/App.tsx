import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {Toaster} from "sonner"

import "./global.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
