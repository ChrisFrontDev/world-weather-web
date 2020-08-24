import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { LayerContextProvider } from './context/LayerContext';
import CreateGlobalStyle from './styles/Global';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <CreateGlobalStyle />
      <LayerContextProvider>
        <Router>
          <Routes />
        </Router>
      </LayerContextProvider>
    </div>
  );
}

export default App;
