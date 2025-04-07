import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/navbar';
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
