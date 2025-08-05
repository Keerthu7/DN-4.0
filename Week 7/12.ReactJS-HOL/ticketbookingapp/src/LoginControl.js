import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import FlightDetails from './FlightDetails';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  // Element variables
  let page;
  let button;

  if (isLoggedIn) {
    page = <UserPage />;
    button = <button onClick={handleLogoutClick}>Logout</button>;
  } else {
    page = <GuestPage />;
    button = <button onClick={handleLoginClick}>Login</button>;
  }

  return (
    <div>
      <h1>Ticket Booking App</h1>
      {button}
      {page}
      <FlightDetails />
    </div>
  );
}

export default LoginControl;
