import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { LayerContextProvider } from './components/context/LayerContext';

import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <LayerContextProvider>
        <Router>
          <Routes />
        </Router>
      </LayerContextProvider>
    </div>
  );
}

export default App;
