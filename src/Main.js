import React from 'react';
import { useState, useEffect } from 'react';
import TableBody from './components/TableBody';
import SearchBar from './components/SearchBar';
import './main.css';
import PlanetPopup from './components/PlanetPopup';

function App() {
  const [errorFetching, setErrorFetching] = useState(null);
  const [isLoading, setLoading ]=useState(true);
  const [filteredData, setFilteredData]=useState([]);
  const [allData, setAllData] = useState([]);
  const [receivedData, setReceivedData] = useState('');
const [selectedPlanet, setSelectedPlanet] = useState('');
  const data=[];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          fetchPlanet1,
          fetchPlanet2,
          fetchPlanet3,
          fetchPlanet4,
          fetchPlanet5,
          fetchPlanet6,
          fetchPeople1, 
          fetchPeople2,
          fetchPeople3, 
          fetchPeople4,
          fetchPeople5, 
          fetchPeople6,
          fetchPeople7,
          fetchPeople8, 
          fetchPeople9,
        ] = await Promise.all([
          fetch('https://swapi.dev/api/planets/?page=1'),
          fetch('https://swapi.dev/api/planets/?page=2'),
          fetch('https://swapi.dev/api/planets/?page=3'),
          fetch('https://swapi.dev/api/planets/?page=4'),
          fetch('https://swapi.dev/api/planets/?page=5'),
          fetch('https://swapi.dev/api/planets/?page=6'),
          fetch('https://swapi.dev/api/people/?page=1'),
          fetch('https://swapi.dev/api/people/?page=2'),
          fetch('https://swapi.dev/api/people/?page=3'),
          fetch('https://swapi.dev/api/people/?page=4'),
          fetch('https://swapi.dev/api/people/?page=5'),
          fetch('https://swapi.dev/api/people/?page=6'),
          fetch('https://swapi.dev/api/people/?page=7'),
          fetch('https://swapi.dev/api/people/?page=8'),
          fetch('https://swapi.dev/api/people/?page=9'),
        ]);
  
        if (!fetchPlanet1.ok || !fetchPlanet2.ok || !fetchPlanet3.ok ||  !fetchPlanet4.ok ||  !fetchPlanet5.ok || !fetchPlanet6.ok || !fetchPeople1.ok || !fetchPeople2.ok || !fetchPeople3.ok || !fetchPeople4.ok ||!fetchPeople5.ok || !fetchPeople6.ok || !fetchPeople7.ok || !fetchPeople8.ok || !fetchPeople9.ok) {
          throw new Error('One or more fetch requests failed');
        }
  
        const [planetJson1,planetJson2, planetJson3, planetJson4,planetJson5, planetJson6,peopleJson1, peopleJson2, peopleJson3, peopleJson4,  peopleJson5, peopleJson6, peopleJson7, peopleJson8, peopleJson9] = await Promise.all([
          fetchPlanet1.json(),
          fetchPlanet2.json(),
          fetchPlanet3.json(),
          fetchPlanet4.json(),
          fetchPlanet5.json(),
          fetchPlanet6.json(),
          fetchPeople1.json(),
          fetchPeople2.json(),
          fetchPeople3.json(),
          fetchPeople4.json(),
          fetchPeople5.json(),
          fetchPeople6.json(),
          fetchPeople7.json(),
          fetchPeople8.json(),
          fetchPeople9.json()
        ])
  
        const peopleResults = [...peopleJson1.results, ...peopleJson2.results, ...peopleJson3.results, ...peopleJson4.results, ...peopleJson5.results, ...peopleJson6.results, ...peopleJson7.results, ...peopleJson8.results, ...peopleJson9.results];
  
        const planetsResults = [...planetJson1.results, ...planetJson2.results, ...planetJson3.results, ...planetJson4.results, ...planetJson5.results, ...planetJson6.results];   
  
        peopleResults.forEach((person, index) => {
  
          const planetName = planetsResults.find((planet) => person.homeworld == planet.url);
  
          data.push({
            ...person,
            planet: planetName,
          })
        });
        setFilteredData(data);
        setAllData(data);
      
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorFetching('Error fetching data. Please try again later.');
      }
      finally{
        setLoading(false);
      }
    };
  
    fetchData();
  
  }, []);


  const handleSortNumber = (key) =>{
    const sortData = filteredData.slice().sort((a,b) =>{
      return a[key] - b[key] 
    });
    setFilteredData(sortData);
  }

  const handleSortSring = (key) =>{
    const sortTable = filteredData.slice().sort((a,b) =>{
      return a[key] > b[key] ? 1 : -1;
    });
    setFilteredData(sortTable);
  }
  
  const handleDataFromSingleRow = (data) => {
    setSelectedPlanet(data);
  };

  if(errorFetching){
    return <div className='loader fetch-error'> 
      <div className="loader__animation"> </div>
      <div className="loader__txt"> {errorFetching} </div>
    </div>
  }
  if(isLoading){
    return <div className='loader'> 
    <div className="loader__animation"> </div>
    <div className="loader__txt"> Wait for a data, is loading. </div>
    </div>
  }

  return (
    <div className='page__wrapper'> 

      <SearchBar displayData={allData} setSearchResults={setFilteredData} />
    
      {!filteredData.length ? <p className='results-not-found'> Not found </p> :  (
        <table className='page__table' cellPadding='8' cellSpacing='0'>
        <thead>
        <tr>
            <th onClick={() => handleSortSring('name')}>Name</th>
            <th onClick={() => handleSortNumber('height')}>Height</th>
            <th onClick={() => handleSortNumber('mass')}>Mass</th>
            <th onClick ={() => handleSortSring('created')}>Created</th>
            <th onClick ={() => handleSortNumber('edited')}>Edited</th>
            <th onClick ={() => handleSortSring('planetName')}>Planet Name</th>
          </tr>
        </thead>   
        <TableBody filteredResults={filteredData}  onDataFromParent={handleDataFromSingleRow}/>
      </table>
      
      )
     }

    {selectedPlanet &&     <div className='planetPopup'>
      <PlanetPopup planet={selectedPlanet}
            onClose={()=>setSelectedPlanet(null)}/>
            </div> }
 
    
   
    </div>
  )
}

export default App;