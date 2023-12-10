import React, {useState} from 'react';
import PlanetPopup from '../PlanetPopup';

const SingleRow = ({ user, planet }) => {

  const [selectedPlanet, setSelectedPlanet]=useState(null);

  const getPeopleUrl = (peopleUrl) =>{
    return peopleUrl.split('/').slice(-2, -1).pop();
  }

  const formatDate = (date) =>{
    const displayDate = new Date(date).toISOString().split('T')[0];
    return displayDate;
  }
  
  const onPlanetClick = (id) => {
    setSelectedPlanet(id);
  }

  return (
     <>
      <tr key={getPeopleUrl(user.url)}> 
        <td>{user.name}</td>
        <td>{user.height} </td>
        <td>{user.mass} </td>

        <td> {formatDate(user.created)}</td>
        <td>{formatDate(user.edited)}</td>
        <td onClick={()=> onPlanetClick(user.planet.name)}>{user.planet.name}</td>
      </tr>

     {selectedPlanet && <PlanetPopup planet={planet}
      onClose={()=>setSelectedPlanet(null)}/> }
     </>
  )
}
export default SingleRow;