import { useState } from 'react';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <LoginPage onSwitchToRegister={() => setShowLogin(false)} />
      ) : (
        <RegisterPage onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </>
  );
}

export default App;
