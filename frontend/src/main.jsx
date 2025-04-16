import React from 'react';
import ReactDOM from 'react-dom/client';
import SignInPage from './pages/loginpage';
import SignUpPage from './pages/signup';
const App = () => {
  return (
    <SignUpPage/>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
