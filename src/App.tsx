import { FC } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import Router from './commons/Router/Router';

const App: FC<any> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;