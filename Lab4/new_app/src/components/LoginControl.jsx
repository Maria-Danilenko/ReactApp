import React, { useState, useEffect } from 'react';

function useConsoleLog(value, message) {
  useEffect(() => {
    console.log(`${message}: ${value}`);
  }, [value, message]);
}

function LogoutButton(props) {
  return (
    <button type='button' className='btn btn-danger' onClick={props.onClick}>
      Вийти
    </button>
  );
}

function LoginButton(props) {
  return (
    <button type='button' className='btn btn-success' onClick={props.onClick}>
        Увійти
    </button>
  );
}

export default function LoginControl () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useConsoleLog(isLoggedIn, 'isLoggedIn');

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      {button}
    </div>
  )
}
