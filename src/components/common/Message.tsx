import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';

interface ContainerProps {
  outgoing: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  align-items: center;
  align-self: ${props => (props.outgoing ? 'flex-end' : 'flex-start')};
  background: ${props =>
    props.outgoing ? props.theme.colors.main : props.theme.colors.secondary};
  border-radius: ${props =>
    props.outgoing ? '15px 0px 15px 15px' : '0px 15px 15px 15px;'};
  display: flex;
  margin-bottom: 16px;
  min-width: 50px;
  max-width: 320px;

  //TODO: put breakpoints as constants
  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

interface MessageProps {
  message: string;
  outgoing: boolean;
}

export const Message: React.FC<MessageProps> = ({
  message,
  outgoing,
}: MessageProps) => {
  return (
    <StyledContainer outgoing={outgoing}>
      <p
        css={`
          padding: 0 10px;
        `}
      >
        {message}
      </p>
    </StyledContainer>
  );
};
