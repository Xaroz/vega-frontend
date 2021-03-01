import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}

const lightTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: '#FF5B15',
    secondary: '#FFC5AD',
  },
};

export { lightTheme };
