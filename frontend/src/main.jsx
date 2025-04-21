import React from 'react';
import ReactDOM from 'react-dom/client';

import SignInPage from './pages/loginpage';
import SignUpPage from './pages/signup';
import HomePage from "./pages/home"
import ContactUsPage from './pages/contact';
import AboutUsPage from './pages/aboutus';

const App = () => {
  return (
    <AboutUsPage/>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
