import SingleRow from '../SingleRow';
import React from 'react';

const TableBody = ({ filteredResults}) => {

    return (
      <tbody cellSpacing='4'>
        {filteredResults.map((user) => {
          return <SingleRow user={user} key={user.url} planet={user.planet} />
          })
        }
      </tbody>
    )
}
export default TableBody