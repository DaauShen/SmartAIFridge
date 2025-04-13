import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar2 from './components/navbar2';
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <NavBar2 />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
