import React from 'react';
import ReactDOM from 'react-dom/client';

import SignInPage from './pages/loginpage';
import SignUpPage from './pages/signup';
import HomePage from "./pages/home"
import ContactUsPage from './pages/contact';
import AboutUsPage from './pages/aboutus';
import Fridge from './pages/fridge';
import Dashboard from './pages/dashboard';
import PopUpBox from './components/popupbox';
import LineChartComponent from './components/LineChart';
const App = () => {
  return (
    // <PopUpBox name="Humidity"/>
    <LineChartComponent/>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
