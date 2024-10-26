import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import AboutUs from "../src/Pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import TermsAndConditions from "./Pages/Terms and Conditions/TermsAndConditions";
import ShippingAndDelivery from "./Pages/Shipping and Delivery/ShippingAndDelivery";
import Privacy from "./Pages/Privacy Policy/Privacy";
import ReturnPolicy from "./Pages/Return Policy/ReturnPolicy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="terms" element={<TermsAndConditions />} />
      <Route path="shipping" element={<ShippingAndDelivery />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="return" element={<ReturnPolicy />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
