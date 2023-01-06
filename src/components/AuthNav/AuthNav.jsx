import React from 'react';
import { StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Регистрация</StyledLink>
      <StyledLink to="/login">Логин</StyledLink>
    </div>
  );
}
