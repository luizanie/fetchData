import React from 'react';

const PlanetPopup = ({planet, onClose}) => {
  const formatNumber = number =>{
    return Number(number).toLocaleString('en');
  }
  
  return (
    <>
    <div className="popup-loader">
    </div>
    <div className="popup">
      <div className="popup-content">
        <h2>planet Information</h2>
        <p><strong>Name:</strong> {planet.name}</p>
        <p><strong>Diameter:</strong> {formatNumber(planet.diameter)}</p>
        <p><strong>Climate:</strong> {planet.climate.toUpperCase()}</p>
        <p><strong>Population:</strong> {(planet.population !== 'unknown')  ? formatNumber(planet.population) : 'Unknown number'}</p>
        <button className='button__primary' onClick={onClose}>Close</button>
      </div>
    </div>
    
    </>
  );
};

export default PlanetPopup;