import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar2 from './components/navbar2';
import NavBar1 from './components/navbar';
import Footer from './components/footer'
import SignInBox from './components/signin';
import SignUpBox from './components/signup';
import ContactUs from './components/contactus';
import ContactUs2 from './components/contactus2';
const App = () => {
  return (
    <div>
      <NavBar1 />
      <ContactUs2/>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
