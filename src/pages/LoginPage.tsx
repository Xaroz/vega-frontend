import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  mainType: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.main};
  background-color: white;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  font-size: ${props => (props.mainType === 'primary' ? '1rem' : '2rem')};
`;

export const LoginPage: React.FC = () => {
  return (
    <div>
      LoginPage
      <Button mainType="primary" disabled={true}>
        Hola
      </Button>
    </div>
  );
};
