import React from 'react';
import 'styled-components/macro';

import { Message } from 'components/common/Message';

export const ChatPage: React.FC = () => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      <Message
        outgoing={true}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      />
      <Message outgoing={false} message={`Que?`} />
      <Message outgoing={false} message="klk tu dice?" />
    </div>
  );
};
