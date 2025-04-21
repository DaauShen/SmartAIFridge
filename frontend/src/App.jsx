import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';                // Home is in /pages
import SignIn from './components/signin';      // SignIn is in /components
import SignUp from './components/signup';      // SignUp is in /components
import ContactUs from './components/contactus'; // ContactUs is in /components
import AboutUs from './components/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </Router>
  );
}

export default App;
