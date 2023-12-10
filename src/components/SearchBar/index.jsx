import React from 'react';

const SearchBar = ({ displayData, setSearchResults }) => {

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(displayData)

        const filteredUsers = displayData.filter((user) =>{
          return user.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setSearchResults(filteredUsers);
    }

    return (
      <div className="page__search search-person">
        <input
            className="search__input"
            type="text"
            id="search"
            placeholder='Search by name'
            onChange={handleSearchChange}
        />
      </div>
    )
}
export default SearchBar