import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.main};
  background-color: white;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  font-size: ${props => (props.primary ? '1rem' : '2rem')};
`;

export const LoginPage: React.FC = () => {
  return (
    <div>
      LoginPage
      <Button primary={true} disabled={true}>
        Hola
      </Button>
    </div>
  );
};
