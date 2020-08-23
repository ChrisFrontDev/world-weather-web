import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeafletMap from './components/Map/LeafletMap';
import { LayerContextProvider } from './components/context/LayerContext';

function App() {
  return (
    <div className="App">
      <LayerContextProvider>
        <LeafletMap />
      </LayerContextProvider>
    </div>
  );
}

export default App;
