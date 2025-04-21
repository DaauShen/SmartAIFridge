import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar1 from './components/navbar';
import Footer from './components/footer';

import HomePage from './pages/home';
import AboutUs from './components/AboutUs'; 
import ContactUs from './components/contactus';
import ContactUs2 from './components/contactus2';
import SignInBox from './components/signin';
import SignUpBox from './components/signup';

const App = () => {
  return (
    <Router>
      <NavBar1 />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact2" element={<ContactUs2 />} />
        <Route path="/signin" element={<SignInBox />} />
        <Route path="/signup" element={<SignUpBox />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
