import React, {useState} from 'react';
import PlanetPopup from '../PlanetPopup';

const SingleRow = ({ user, onDataFromChild }) => {

  const getPeopleUrl = (peopleUrl) =>{
    return peopleUrl.split('/').slice(-2, -1).pop();
  }

  const formatDate = (date) =>{
    const displayDate = new Date(date).toISOString().split('T')[0];
    return displayDate;
  }
  
  const onPlanetClick = (id) => {
    onDataFromChild(id);
  }

  return (
     <>
      <tr key={getPeopleUrl(user.url)}> 
        <td>{user.name}</td>
        <td>{user.height} </td>
        <td>{user.mass} </td>

        <td> {formatDate(user.created)}</td>
        <td>{formatDate(user.edited)}</td>
        <td>
          <button className='button__primary' onClick={()=> onPlanetClick(user.planet)}>
          {user.planet.name}
          </button>
        </td>
      </tr>
     </>
  )
}
export default SingleRow;