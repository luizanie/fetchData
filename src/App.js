import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Table from './components/Table'
import PlanetPopup from './components/PlanetPopup';
import './main.css';

function App() {
  const test = 'Hello from App!';

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path='/modal/:id' element={<PlanetPopup additionalProp={test} />} />
      </Routes>
    </div>
  );
}

export default App;
