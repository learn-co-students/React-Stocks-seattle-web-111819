import React from 'react';

const SearchBar = ({filter, sort, onFilterChange, onSortChange}) => {

  const handleSort = e => {
    onSortChange(e.target.value)
  }

  const handleFilter = e => {
    onFilterChange(e.target.value)
  }

  return (
    // Added style to center the elements
    <div style={{margin: "auto", width: "max-content"}}>
      <strong>Sort by: </strong>
      <label>
        {/* Marks as checked based on the value of the sort prop */}
        <input type="radio" value="abc" checked={sort === "abc" ? true : false} onChange={handleSort}/>
        Alphabetically 
      </label>
      <label>
        {/* Marks as checked based on the value of the sort prop */}
        <input type="radio" value="$" checked={sort === "$" ? true : false} onChange={handleSort}/>
        Price
      </label>
      <br/>
      <label>
        <strong>Filter: </strong>
        {/* sets the value to the filter value set in state */}
        <select value={filter} onChange={handleFilter}>
          {/* Added a "None" option so that you can get out of the filter */}
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;