import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutUs from "./pages/about-us/aboutus";
import ContactUsPage from "./pages/contact/contact";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard/dashboard";
import Fridge from "./pages/fridge/fridge";

function Routing() {
  return (
    <Routes>
        {/* Before authenticating */}
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        {/* After authenticating */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fridge" element={<Fridge />} />

    </Routes>
  );
}

export default Routing;