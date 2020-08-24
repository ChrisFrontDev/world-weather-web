import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { darkTheme } from './styles/themes/Dark';
import { lightTheme } from './styles/themes/Light';
import CreateGlobalStyle from './styles/Global';

import { LayerContextProvider } from './context/LayerContext';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <CreateGlobalStyle />
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
