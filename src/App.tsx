import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from 'router/AppRouter';

import { lightTheme } from 'themes/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};
