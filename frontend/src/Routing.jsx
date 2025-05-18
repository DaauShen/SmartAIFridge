import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutUs from "./pages/about-us/aboutus";
import ContactUsPage from "./pages/contact/contact";
import SignUpPage from "./pages/authentication/signup";
import SignInPage from "./pages/authentication/loginpage";
import Dashboard from "./pages/dashboard/dashboard";
import Fridge from "./pages/fridge/fridge";
import ProtectedRoutes
 from "./ProtectedRoutes";
function Routing() {
//   app.get("http://localhost:5001/api/protected", requireLogin, (req, res) => {
//   res.json({ message: "Trang bảo vệ truy cập thành công", user: req.session.user });
// });

  return (
    <Routes>
        {/* Before authenticating */}
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        {/* After authenticating */}
        <Route element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/fridge" element={<Fridge />} />
        </Route>


    </Routes>
  );
}

export default Routing;