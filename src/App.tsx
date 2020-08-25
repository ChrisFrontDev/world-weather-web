import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { darkTheme } from './styles/themes/Dark';
import { lightTheme } from './styles/themes/Light';
import CreateGlobalStyle from './styles/Global';

import { LayerContextProvider } from './context/LayerContext';
import Toggle from './components/Toggle/Toggle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <CreateGlobalStyle />
      <div className="App">
        <Toggle theme={theme} toggleTheme={themeToggler} />

        <LayerContextProvider>
          <Router>
            <Routes />
          </Router>
        </LayerContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
