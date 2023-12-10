import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PlanetPopup = () => {
  const [planetData, setPlanetData] = useState(null);
  const [isLoading, setLoading ]=useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}`);
        const result = await response.json();
        setPlanetData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  if(isLoading){
    return <div className='loader'> 
    <div className="loader__animation"> </div>
    <div className="loader__txt"> Wait for a data, is loading. </div>
    </div>
  }
  const handleClose = () => {
    navigate('/');
  };

  const formatNumber = number =>{
    return Number(number).toLocaleString('en');
  }

  return (
    <>
    <div className="popup-loader">
    </div>
    <div className="popup">
      <div className="popup-content">
        <h2>Planet Information</h2>
        <p><strong>Name:</strong> {planetData.name}</p>
        <p><strong>Diameter:</strong> {formatNumber(planetData.diameter)}</p>
        <p><strong>Climate:</strong> {planetData.climate.toUpperCase()}</p>
        <p><strong>Population:</strong> {(planetData.population !== 'unknown')  ? formatNumber(planetData.population) : 'Unknown number'}</p>
        <button className='button__primary' onClick={handleClose}>Close</button>
      </div>
    </div>
    
    </>
  );
};

export default PlanetPopup;