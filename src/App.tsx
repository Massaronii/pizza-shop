import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {Toaster} from "sonner"

import "./global.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
