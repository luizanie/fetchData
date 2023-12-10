import SingleRow from '../SingleRow';
import React, {useState} from 'react';

const TableBody = ({ filteredResults, onDataFromParent}) => {

  const handleDataFromChild = (data) => {
    onDataFromParent(data);
  };

    return (
      <tbody cellSpacing='4'>
        {filteredResults.map((user) => {
          return <SingleRow user={user} key={user.url} planet={user.planet} onDataFromChild={handleDataFromChild}/>
          })
        }
      </tbody>
    )
}
export default TableBody