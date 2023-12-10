import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import PlanetPopup from './components/PlanetPopup';

function App() {
  const test = 'Hello from App!';

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/modal/:id' element={<PlanetPopup additionalProp={test} />} />
      </Routes>
    </div>
  );
}

export default App;
