import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SingleRow = ({ user, onDataFromChild }) => {
  const navigate = useNavigate();

  const getPeopleUrl = (peopleUrl) =>{
    return peopleUrl.split('/').slice(-2, -1).pop();
  }

  const formatDate = (date) =>{
    const displayDate = new Date(date).toISOString().split('T')[0];
    return displayDate;
  }
  
  const idPlanet = getPeopleUrl(user.planet.url);

  const onPlanetClick = (id) => {
    onDataFromChild(id);
    navigate(`/modal/${idPlanet}`);
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