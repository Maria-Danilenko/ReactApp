import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function useConsoleLog(value, message) {
  useEffect(() => {
    console.log(`${message}: ${value}`);
  }, [value, message]);
}

const Button = styled.button`
  background-color: ${props => (props.isLoggedIn ? 'red' : 'green')};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.isLoggedIn ? 'darkred' : 'darkgreen')};
  }`;

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useConsoleLog(isLoggedIn, 'isLoggedIn');

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Button isLoggedIn={isLoggedIn} onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
        {isLoggedIn ? 'Вийти' : 'Увійти'}
      </Button>
    </div>
  );
}