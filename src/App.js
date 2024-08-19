import './App.css';
import { useState } from 'react';
import LandingPage from './views/landing/LandingPage';
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import Dashboard from './views/dashboard/Dashboard';

function App() {
  const [selectedView, setSelectedView] = useState('dashboard');

  const renderView = () => {
    switch (selectedView) {
      case 'home':
        return <LandingPage/>;
      case 'sign-in':
        return <SignIn/>;
      case 'sign-up':
        return <SignUp/>;
      case 'dashboard':
        return <Dashboard/>;
      default:
        return <div>Home View</div>;
    }
  };

  return (
    <>
      { renderView() }
    </>
  );
}

export default App;
